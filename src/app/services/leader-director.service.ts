import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderDirectorService {

  private url = '../assets/data/leadershipDirectors-data.json';

  constructor(private httpClient: HttpClient) { 
    console.log('LeaderDirectorService constructor called');
    console.log(this.url)
  }

  getBoardMembers(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      map(data => {
      const boardMembers = data.filter((member: any) => member.boardOfDirectors === true);
      console.log('Board Members: ', boardMembers);
      return boardMembers;
      })
    );
    
  }

  getLeadershipTeam(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      map(data => {
        const leadershipTeam = data.filter((member: any) => member.leadershipTeam === false);
        console.log('Leadership Team: ', leadershipTeam);
        return leadershipTeam;
      })
    );
  }

}
