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


  email:string|any;
  password:string|any;

  constructor(private _route:Router){ }

  ngOnInit(): void {
   
  }
 

  sbtn1(){
    this._route.navigate(['signup']);
    $('.form-box').css('display', 'block');
    $('.form-box').css('display', 'none');

  }

  public login1(email: string, password: string){
    this._route.navigate(['dashboard']);
  }

}
