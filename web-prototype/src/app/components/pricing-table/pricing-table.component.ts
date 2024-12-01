import { Component } from '@angular/core';
import * as pricePackage from '../../Model/pricing-packages.json';

@Component({
  selector: 'aap-pricingtable',
  standalone: true,
  imports: [],
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.scss'
})
export class PricingTableComponent {


  packages: any = ( pricePackage as any ).default;

  constructor() {

    console.debug( pricePackage);

   }





}
