import { Component } from '@angular/core';

import { AboutUsNavComponent } from '../about-us-nav/about-us-nav.component';
import { LeadershipDirectorsComponent } from '../../../components/leadership-directors/leadership-directors.component';

@Component({
  selector: 'aap-board',
  imports: [AboutUsNavComponent, LeadershipDirectorsComponent],
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  constructor(private leadershipDirectorsComponent: LeadershipDirectorsComponent) { }

  ngOnInit() {

  }

}
