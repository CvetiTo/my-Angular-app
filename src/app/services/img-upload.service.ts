import { Injectable } from '@angular/core';
import { ref, Storage, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { from, switchMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  constructor(
    public storage: Storage
  ) { }

  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );
  }

  
}
