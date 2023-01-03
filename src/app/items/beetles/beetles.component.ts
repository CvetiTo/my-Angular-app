import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-beetles',
  templateUrl: './beetles.component.html',
  styleUrls: ['./beetles.component.css']
})
export class BeetlesComponent implements OnInit {
  items: any = [];;
  constructor(public itemService: ItemsService) { }
  ngOnInit():void {
    this.itemService.getSortedBeetlesData().subscribe(items => {
      this.items= items;
    })
  }
}
