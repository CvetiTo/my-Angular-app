import { RouterModule, Routes } from "@angular/router";
import { ItemsPageComponent } from "./items-page/items-page.component";
import { NewItemComponent } from "./new-item/new-item.component";

const routes: Routes = [
    {
        path: 'catalog',
        component: ItemsPageComponent
    },
    {
        path: 'add',
        component: NewItemComponent
    },
    
];

export const ItemsRoutingModule = RouterModule.forChild(routes);