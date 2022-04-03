import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ItemDetailComponent} from "./component/item-detail/item-detail.component";
import {AllItemsComponent} from "./component/all-items/all-items.component";
import {InsertItemComponent} from "./component/insert-item/insert-item.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'item', component:ItemDetailComponent},
  {path:'item/:id', component: ItemDetailComponent},
  {path:'items',component:AllItemsComponent},
  {path:'insertItem',component:InsertItemComponent},
  {path:'login',component:LoginComponent}
]

export const routing = RouterModule.forRoot(routes);
