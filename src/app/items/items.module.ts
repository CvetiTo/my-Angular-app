import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemListItemComponent,
    ItemsPageComponent,
    NewItemComponent,
    
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    ItemListItemComponent
  ]
})
export class ItemsModule { }
