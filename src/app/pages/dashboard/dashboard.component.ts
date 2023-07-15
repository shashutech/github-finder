import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private githubService: GithubService,
  ) { }

  usernameInput: string;

  userDetails;

  ngOnInit(): void {
  }

  fetchGithubUserDetails(): void {
    this.githubService.getGithubUserDetails(this.usernameInput).subscribe((res) => {
      this.userDetails = res;
    }, (err) => {
      console.log(err);
    })
  }
}

