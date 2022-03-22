import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { fullUsers } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    const URL = `${environment.URL}/users`;
    return this.http.get(URL);
  }
  getUserByID(id: number) {
    const URL = `${environment.URL}/users/${id}`;
    return this.http.get<fullUsers>(URL);
  }
}
