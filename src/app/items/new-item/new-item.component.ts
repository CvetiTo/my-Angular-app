import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  constructor(
    
    public itemService: ItemsService,
    
  ) { }

  ngOnInit(): void { 
   
  }
  
}
