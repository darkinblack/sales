import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemDetail} from "../pojo/itemDetail/item-detail";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {
  private itemDetailURL = 'http://localhost:8080/api/v1/item/getById';
  private findAllItemURL = 'http://localhost:8080/api/v1/item/all';
  private insertItemURL = 'http://localhost:8080/api/v1/item/insertOne';

  constructor(private route : ActivatedRoute,
              private router: Router,
              private http:HttpClient) { }

  public getItemById(id:number){
    return this.http.get<ItemDetail>(this.itemDetailURL+"?id="+id);
  }

  public getAllItems(){
    return this.http.get<Array<ItemDetail>>(this.findAllItemURL);
  }

  public insertItem(itemDetail:ItemDetail){
    return this.http.post<number>(this.insertItemURL,itemDetail);

  }

}
