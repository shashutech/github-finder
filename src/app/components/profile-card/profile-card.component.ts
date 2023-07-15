import { Component, OnChanges, Input } from '@angular/core';
import { GithubQueryResponseModel, SingleUserResponseModel } from 'src/app/models/github.model';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnChanges {

  @Input() userDetails: GithubQueryResponseModel;

  showSingleUserCard = false;

  singleUserDetails;

  constructor(
    private githubService: GithubService,
  ) { }

  ngOnChanges(): void {
    if (this.userDetails.items.length === 1) {
      this.fetchSingleUserDetails(this.userDetails.items[0]);
    } else {
      this.showSingleUserCard = false;
    }
  }

  fetchSingleUserDetails(user: SingleUserResponseModel): void {
    this.showSingleUserCard = true;
    this.githubService.getSingleUserDetails(user.login).subscribe((res) => {
      this.singleUserDetails = res;
    });
  }

}

