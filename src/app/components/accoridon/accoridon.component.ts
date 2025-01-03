import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AnalyticsService } from '../../services';

@Component({
  selector: 'aap-accoridon',
  standalone: true,
  imports: [MatIconModule],
  providers: [AnalyticsService],
  templateUrl: './accoridon.component.html',
  styleUrl: './accoridon.component.scss'
})
export class AccoridonComponent {

 @Input() jsonData: any;

  randomNumber = Math.random() * 100;
  aid = crypto.randomUUID();


  constructor(
    private analyticsService: AnalyticsService
  ) 
  {
    console.log(this.randomNumber);
    console.log(this.aid);

  }

  ngOnInit(){
    this.analyticsService.trackEvent('Accordion', 'Loading','Accordion has loaded');
  }
  

}
