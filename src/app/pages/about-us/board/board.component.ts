import { Component } from '@angular/core';

import { AboutUsNavComponent } from '../about-us-nav/about-us-nav.component';
import { LeaderDirectorService } from '../../../services/leader-director.service';
import { LeadershipDirectorsComponent } from '../../../components/leadership-directors/leadership-directors.component';

@Component({
  selector: 'aap-board',
  imports: [AboutUsNavComponent, LeadershipDirectorsComponent],
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  member: any;

  constructor(private leaderDirectorService: LeaderDirectorService) { }

  ngOnInit() {
    this.leaderDirectorService.getLeadershipTeam()
      .subscribe(response => {
        this.member = response;
      });
    
  }

}
function subscribe(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

