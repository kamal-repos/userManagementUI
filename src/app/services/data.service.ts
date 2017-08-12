import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
   
  }

  getUsers(){
    return this.http.get('http://localhost:8080/users')
    .map(res => res.json());
  }

  addUser(user){
    return this.http.post('http://localhost:8080/users', user)
    .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete('http://localhost:8080/users/'+id);
  }
}
