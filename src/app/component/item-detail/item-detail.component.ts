import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemDetailService} from "../../service/item-detail.service";
import {ItemDetail} from "../../pojo/itemDetail/item-detail";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item!:ItemDetail;
  private sub: any;
  id!:number;
  constructor(private route : ActivatedRoute,
              private router: Router,
              private itemDetailService: ItemDetailService) {
    console.log("here")

    // itemService.getItemById()
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      console.log("-----");
      this.itemDetailService.getItemById(this.id).subscribe(data=>
      this.item = data)


      // In a real app: dispatch action to load the details here.
    });

  }

}
