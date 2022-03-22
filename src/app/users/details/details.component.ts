import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { fullUsers } from 'src/app/users.model';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  fulluser$: Observable<fullUsers> | undefined;
  constructor(
    private userService: UserService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.UserDetails();
  }
  private UserDetails() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.fulluser$ = this.userService.getUserByID(id);
  }
  goToUserPosts(userID: number) {
    this.router.navigate([`posts/userid/${userID.toString()}`]);
  }
}
