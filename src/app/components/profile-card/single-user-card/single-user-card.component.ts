import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user-card',
  templateUrl: './single-user-card.component.html',
  styleUrls: ['./single-user-card.component.scss']
})
export class SingleUserCardComponent {

  @Input() userDetails;

  constructor() { }

}
