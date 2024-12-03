import { Component } from '@angular/core';
import * as AccordionData from '../../Model/accordion-data.json';

@Component({
  selector: 'aap-accoridon',
  standalone: true,
  imports: [],
  templateUrl: './accoridon.component.html',
  styleUrl: './accoridon.component.scss'
})
export class AccoridonComponent {

  AD: any = (AccordionData as any).default;
  randomNumber = Math.random() * 100;
  aid = crypto.randomUUID();


  constructor() {
    console.debug('AccordionData :', AccordionData);
    console.log(this.randomNumber);
    console.log(this.aid);

  }

  

}
