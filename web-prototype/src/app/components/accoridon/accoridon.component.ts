import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'aap-accoridon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './accoridon.component.html',
  styleUrl: './accoridon.component.scss'
})
export class AccoridonComponent {

 @Input() jsonData: any;

  randomNumber = Math.random() * 100;
  aid = crypto.randomUUID();


  constructor() {
    console.log(this.randomNumber);
    console.log(this.aid);

  }

  

}
