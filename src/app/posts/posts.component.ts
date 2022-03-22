import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'userid', 'body'];
  posts: Posts[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }
}
