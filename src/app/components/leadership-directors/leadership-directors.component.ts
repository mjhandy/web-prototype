import { Component, Input } from '@angular/core';
import { LeaderDirectorService } from '../../services/leader-director.service';

@Component({
  selector: 'app-leadership-directors',
  imports: [],
  standalone: true,
  templateUrl: './leadership-directors.component.html',
  styleUrl: './leadership-directors.component.scss'
})
export class LeadershipDirectorsComponent {

  @Input() data: any;

  constructor(
    private leaderDirectorService: LeaderDirectorService
  ) { }

  ngOnInit() {

    this.leaderDirectorService.getBoardMembers().subscribe(boardMembers => {      
    });
  }

}
