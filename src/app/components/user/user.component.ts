import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User = {
    id: null,
    firstName: '',
    lastName: '',
    gender: '',
    emailId: '',
    phoneNumber: null
  };
  users:User[];
  showUsers:boolean = false;
  showSearch:boolean = false;
  showAddForm:boolean = false;
 
  constructor(private dataService:DataService){}

  ngOnInit(){

  }

  

  searchAllUsers(){
      this.showSearch = false;
      this.showUsers = true;
      this.showAddForm = false;
      this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser(){
    this.dataService.addUser(this.user).subscribe(user => {
      this.users.unshift(user);
    });
  }
 

  deleteUser(id){
    this.dataService.deleteUser(id).subscribe(res => {
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id == id){
          this.users.splice(i,1);
        }
      }
    });
  }

  showSearchForm(){
    this.showSearch = !this.showSearch;
    this.showUsers = false;
    this.showAddForm = false;
  }

 showAddUserForm(){
    this.showAddForm = true;
    this.showSearch = false;
    this.showUsers = false;
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
