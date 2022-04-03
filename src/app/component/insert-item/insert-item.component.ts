import { Component, OnInit } from '@angular/core';
import {ItemDetail} from "../../pojo/itemDetail/item-detail";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemDetailService} from "../../service/item-detail.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.css']
})
export class InsertItemComponent implements OnInit {

  item!: ItemDetail;
  constructor(private itemService: ItemDetailService,
              private router: Router,

              private route: ActivatedRoute) {
    this.item = new ItemDetail();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    this.item = form.value.item as ItemDetail;

    console.log(this.item);
    this.itemService.insertItem(this.item).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['items'])
      }

      );

  }



}
