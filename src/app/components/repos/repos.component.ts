import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnChanges {

  @Input('repos') repoUrl;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.repoUrl);
  }

}
