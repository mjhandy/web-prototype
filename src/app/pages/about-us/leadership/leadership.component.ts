import { Component } from '@angular/core';

import { AboutUsNavComponent } from '../about-us-nav/about-us-nav.component';
import { LeaderDirectorService } from '../../../services/leader-director.service';
import { LeadershipDirectorsComponent } from '../../../components/leadership-directors/leadership-directors.component';
@Component({
  selector: 'aap-leadership',
  imports: [AboutUsNavComponent, LeadershipDirectorsComponent],
  standalone: true,
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {

  member: any;

  constructor(private leaderDirectorService: LeaderDirectorService) { }

  ngOnInit() {
    this.leaderDirectorService.getLeadershipTeam()
      .subscribe(response => {
        this.member = response;
      });
    
  }

}
