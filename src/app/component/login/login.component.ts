import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginUser} from "../../pojo/login-user";
import {UserService} from "../../service/user.service";
import {User} from "../../pojo/user/user";
import {Subject} from 'rxjs';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

interface Alert {
  type: string;
  message: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  show = false;
  alert:Alert = {type: 'success',message: '',};


  constructor(private userService: UserService,
              private route : ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.user = new User();
  }



  onSubmit(form:NgForm){
    this.user= form.value.user as User;
    console.log(this.user);
    this.userService.login(this.user).subscribe(
      data=>{
        if(data==true){
          this.router.navigate(['items']);
        }else{
          console.log("login failed");
          this.alert = {
            type: 'error',
            message: 'login failed',
          };
          this.show = true;
        }
      })
  }



}
