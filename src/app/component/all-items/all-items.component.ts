import { Component, OnInit } from '@angular/core';
import {ItemDetailService} from "../../service/item-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemDetail} from "../../pojo/itemDetail/item-detail";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  items!: Array<ItemDetail> ;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private itemDetailService: ItemDetailService ) { }

  ngOnInit(): void {
    this.itemDetailService.getAllItems().subscribe(data=>this.items=data);
    console.log(this.items);
  }

}
