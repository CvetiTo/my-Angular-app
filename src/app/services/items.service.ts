import { Injectable } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  collectionData,
  orderBy,
  limit,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayUnion,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Item } from '../interfaces/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  userUid:string | undefined;
  constructor(private http: HttpClient,
    public firestore: Firestore,
    private router: Router,

  ) {
    this.getData(),
    this.getSortedData()
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }
  
  addData(value: any) {
    const user = JSON.parse(localStorage.getItem('user')!);
    //console.log(user.uid);
    const owner = user.uid;
    const dbInstance = collection(this.firestore, 'items');
    addDoc(dbInstance, { ...value, owner, created_at: serverTimestamp(), likes:[] })
      .then(() => {
        //alert('Data sent');
        this.router.navigate(['/catalog']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
  getData(): Observable<Item[] >{
    const dbInstance = collection(this.firestore, 'items');
    return collectionData(dbInstance, { idField: 'id'}) as Observable<Item[]>;
  }

  getSortedData(): Observable<Item[] >{
    const dbInstance = collection(this.firestore, 'items');
    const q = query(dbInstance, orderBy('created_at', 'desc'), limit(3));
    return collectionData(q,{ idField: 'id'}) as Observable<Item[]>;
  }
  getSortedBeetlesData(): Observable<Item[] >{
    const dbInstance = collection(this.firestore, 'items');
    const q = query(dbInstance, where('type', '==', 'beetle'));
    return collectionData(q,{ idField: 'id'}) as Observable<Item[]>;
  }
  getSortedSpidersData(): Observable<Item[] >{
    const dbInstance = collection(this.firestore, 'items');
    const q = query(dbInstance, where('type', '==', 'spider'));
    return collectionData(q,{ idField: 'id'}) as Observable<Item[]>;
  }
  getSortedInsectsData(): Observable<Item[] >{
    const dbInstance = collection(this.firestore, 'items');
    const q = query(dbInstance, where('type', '==', 'insect'));
    return collectionData(q,{ idField: 'id'}) as Observable<Item[]>;
  }
  updateData(item:any) {
    const dataToUpdate = doc(this.firestore, `items/${item.id}`);
    return updateDoc(dataToUpdate, {...item});   
  }
  likeBug(item:any) {
    const dataToUpdate = doc(this.firestore, `/items/${item.id}`);
    this.userUid = JSON.parse(localStorage.getItem('user')!).uid;
   return updateDoc(dataToUpdate, {...item, likes:arrayUnion(this.userUid)});
  }
  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'items', id);
    let result = confirm("Want to delete?");
    if(result){
      deleteDoc(dataToDelete)
      .then(() => {
        //alert('Data Deleted');
        this.getData()
      })
      .catch((err) => {
        alert(err.message)
      })
    }
    
  }
}
