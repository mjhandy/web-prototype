import { Component } from '@angular/core';
import { AccoridonComponent } from '../../../components/accoridon/accoridon.component';


@Component({
  selector: 'app-accordians',
  standalone: true,
  imports: [AccoridonComponent],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.scss'
})
export class AccordionsComponent {

}
