import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { AllItemsComponent } from './component/all-items/all-items.component';
import { InsertItemComponent } from './component/insert-item/insert-item.component';
import {FormsModule} from "@angular/forms";
import { DeleteItemComponent } from './component/delete-item/delete-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './component/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemDetailComponent,
    AllItemsComponent,
    InsertItemComponent,
    DeleteItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
