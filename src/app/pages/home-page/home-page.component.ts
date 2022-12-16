import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit {
  items: any = [];;
  constructor(public itemService: ItemsService) { }
  ngOnInit():void {
    this.itemService.getSortedData().subscribe(items => {
      this.items= items;
    })
  }
}
 

  

  
  

