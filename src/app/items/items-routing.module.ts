import { RouterModule, Routes } from "@angular/router";
import { BeetlesComponent } from "./beetles/beetles.component";
import { InsectsComponent } from "./insects/insects.component";
import { ItemsPageComponent } from "./items-page/items-page.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { SpidersComponent } from "./spiders/spiders.component";

const routes: Routes = [
    {
        path: 'catalog',
        component: ItemsPageComponent
    },
    {
        path: 'catalog/beetles',
        component: BeetlesComponent
    },
    {
        path: 'catalog/spiders',
        component: SpidersComponent
    },
    {
        path: 'catalog/insects',
        component: InsectsComponent
    },
    {
        path: 'add',
        component: NewItemComponent
    },
    
];

export const ItemsRoutingModule = RouterModule.forChild(routes);