import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  showUsers:boolean = false;
 
  constructor(private dataService:DataService){}

  ngOnInit(){

  }

  searchAllUsers(){
      this.showUsers = true;
      this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  resetSearchUsers(){
    this.showUsers = false;
  }

}

 interface User{
   emailId: string,
   firstName: string,
   gender: string,
   lastName: string,
   id: number, 
   phoneNumber: number
 }
