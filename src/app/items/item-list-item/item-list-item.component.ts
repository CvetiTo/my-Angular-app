import { Component, Input, OnChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsService } from 'src/app/services/items.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css']
})
export class ItemListItemComponent {
  isLoggedIn: boolean = this.authService.isLoggedIn;
  @Input() item: Item | undefined;
 isEdit:boolean = false;
  constructor(
    public itemService: ItemsService,
    public authService: AuthService
  ) { }
  
  ngOnChanges(): void {
    this.item?.owner == this.authService.userData.id
  }
  
  editRecord(item:Item) {
    item.title = item.title,
    item.image = item.image,
    item.description = item.description
  }
  updateRecord(item:Item) {
    item['title'] = item.title;
    item['image'] = item.image;
    item['description'] = item.description;
    this.itemService.updateData(this.item);
    
  }
}
