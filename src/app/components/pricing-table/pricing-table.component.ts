import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'aap-pricingtable',
    imports: [RouterModule],
    templateUrl: './pricing-table.component.html',
    styleUrl: './pricing-table.component.scss'
})
export class PricingTableComponent {

  @Input() jsonData: any;



}
