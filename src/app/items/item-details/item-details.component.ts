import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit{
  @Input() item: Item | undefined;
  isLoggedIn: boolean = this.authService.isLoggedIn;
   
 
  constructor(
    public itemService: ItemsService,
    public authService: AuthService
  ) { }
  ngOnInit():void {
     
  }
  
}
