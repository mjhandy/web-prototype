import { Component } from '@angular/core';
import * as AccordionData from '../../../Model/accordion-data.json';
import { AccoridonComponent } from '../../../components/accoridon/accoridon.component';


@Component({
    selector: 'app-accordians',
    imports: [AccoridonComponent],
    templateUrl: './accordions.component.html',
    styleUrl: './accordions.component.scss'
})
export class AccordionsComponent {

  AD: any = (AccordionData as any).default;

}
