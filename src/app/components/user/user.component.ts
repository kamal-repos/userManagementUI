import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
 
 constructor(private dataService:DataService){
  console.log('constructor ran..');
 }

 ngOnInit(){
   this.dataService.getUsers().subscribe((users) => {
     //console.log(users);
     this.users = users;
   });
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
