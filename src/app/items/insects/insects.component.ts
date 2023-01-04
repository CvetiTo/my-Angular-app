import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.css']
})
export class InsectsComponent implements OnInit {
  items: any = [];;
  constructor(public itemService: ItemsService) { }
  ngOnInit():void {
    this.itemService.getSortedInsectsData().subscribe(items => {
      this.items= items;
    })
  }
}
