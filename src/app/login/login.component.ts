import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup|any;

  constructor(private _route:Router){ }

  ngOnInit(): void {
    this.login= new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()

    })
  }
  logindata(login:FormGroup){
    console.log(this.login.value)

  }

  sbtn1(){
    this._route.navigate(['signup']);
    $('.form-box').css('display', 'block');
    $('.form-box').css('display', 'none');

  }

}
