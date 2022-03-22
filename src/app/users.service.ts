import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fullUsers } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    const URL = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get(URL);
  }
  getUserByID(id: number) {
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get<fullUsers>(URL);
  }
}
