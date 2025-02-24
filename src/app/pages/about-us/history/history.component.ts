import { Component } from '@angular/core';
import { AboutUsNavComponent } from '../about-us-nav/about-us-nav.component';
import * as HistoryData from '../../../Model/history-data.json';


@Component({
  selector: 'aap-history',
  imports: [AboutUsNavComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  HD: any = (HistoryData as any).default;

  constructor(){
    console.log(this.HD);
  }

  
  
}
