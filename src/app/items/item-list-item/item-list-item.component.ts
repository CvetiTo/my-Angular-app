import { Component, Input, OnChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsService } from 'src/app/services/items.service';



@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css']
})
export class ItemListItemComponent implements OnChanges {
  isLoggedIn: boolean = this.authService.isLoggedIn;
  isEdit: boolean = false;
  userUid: string | undefined;
  canLike: boolean = false;

  @Input() item: Item | undefined;

  constructor(
    public itemService: ItemsService,
    public authService: AuthService
  ) { }

  ngOnChanges() {
    this.item?.owner;
    if (this.isLoggedIn == true) {
      this.userUid = JSON.parse(localStorage.getItem('user')!).uid;
    }

  }

  editRecord(item: Item) {
    item.title = item.title,
      item.image = item.image,
      item.description = item.description,
      item.type = item.type
  }
  updateRecord(item: Item) {
    item['title'] = item.title;
    item['image'] = item.image;
    item['description'] = item.description;
    item['type'] = item.type;
    this.itemService.updateData(this.item);

  }
  likeHandle(item: Item) {
    if (this.userUid) {
      console.log(item.likes);
      this.canLike = item.likes?.includes(this.userUid.toString()) ? true : false;
      item.likes = item.likes;
      this.itemService.likeBug(this.item)

    }
  }
}
