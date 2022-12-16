import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemListItemComponent,
    ItemsPageComponent,
    NewItemComponent,
    ItemDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports:[
    ItemListItemComponent
  ]
})
export class ItemsModule { }
