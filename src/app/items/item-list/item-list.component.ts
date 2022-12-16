import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any = [];;
  constructor(public itemService: ItemsService) { }
  ngOnInit():void {
    this.itemService.getData().subscribe(items => {
      this.items= items;
    })
  }
}
