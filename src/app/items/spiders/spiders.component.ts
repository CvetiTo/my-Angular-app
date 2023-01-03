import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-spiders',
  templateUrl: './spiders.component.html',
  styleUrls: ['./spiders.component.css']
})
export class SpidersComponent implements OnInit {
  items: any = [];;
  constructor(public itemService: ItemsService) { }
  ngOnInit():void {
    this.itemService.getSortedSpidersData().subscribe(items => {
      this.items= items;
    })
  }
}
