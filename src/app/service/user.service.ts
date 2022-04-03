import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemDetail} from "../pojo/itemDetail/item-detail";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginUser} from "../pojo/login-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginURL = 'http://localhost:8080/api/v1/func/login';


  constructor(private route : ActivatedRoute,
              private router: Router,
              private http:HttpClient) { }

  public login(user:LoginUser){
    return this.http.post<boolean>(this.loginURL,user);
  }
}
