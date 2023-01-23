import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class User {
  constructor(
    public classe: string,
    
  ) {
  }
}
@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {
  todayDate : Date = new Date();
  users: User[]|any;
  public emplois: string|any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
    this.getEmplois();
  }

  getUsers(){

    this.httpClient.get<any>('http://localhost:8888/user').subscribe(
    response => {
      console.log(response);
      this.users = response;
    }
  );
  }

  getEmplois(){
    this.httpClient.get<any>('http://localhost:8888/emplois').subscribe(
    response => {
      console.log(response);
      this.emplois = response;
    }
  );
  }

}
  

