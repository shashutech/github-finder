import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GithubQueryResponseModel, SingleUserResponseModel } from 'src/app/models/github.model';

@Component({
  selector: 'app-multi-user-card',
  templateUrl: './multi-user-card.component.html',
  styleUrls: ['./multi-user-card.component.scss']
})
export class MultiUserCardComponent {

  @Input() multiUserDetails: GithubQueryResponseModel;

  @Output() selectedSingleUserEvent = new EventEmitter<any>();

  constructor() { }

  viewSelectedUserDetails(user: SingleUserResponseModel): void {
    this.selectedSingleUserEvent.emit(user);
  }

}
