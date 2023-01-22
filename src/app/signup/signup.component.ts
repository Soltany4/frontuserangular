import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signup:FormGroup|any;
  
    constructor(private _route:Router){ }
  
    ngOnInit(): void {
      this.signup= new FormGroup({
        'fname': new FormControl(),
        'lname': new FormControl(),
        'email': new FormControl(),
        'phone': new FormControl(),
        'adresse': new FormControl(),
        'password': new FormControl()
  
      })
    }
    signupdata(signup:FormGroup){
      console.log(this.signup.value)
  
    }

    sbtn(){
      this._route.navigate(['']);
      $('.form-box').css('display', 'block');
      $('.form-box').css('display', 'none');

    }
  
}
