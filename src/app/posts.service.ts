import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    const URL = `${environment.URL}/posts`;
    return this.http.get(URL);
  }
}
