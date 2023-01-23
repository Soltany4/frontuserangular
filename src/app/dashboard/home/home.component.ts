import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public date_Nai: string,
    public classe: string,
    public adresse: string
  ) {
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[]|any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){

    this.httpClient.get<any>('http://localhost:8888/user').subscribe(
    response => {
      console.log(response);
      this.users = response;
    }
  );
  }

}
