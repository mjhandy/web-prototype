import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SalesInfo{
  name: string,
  sales: number,
  department: string
}

const sales_data = SalesInfo[] = [
  { name: 'Bob', sales: 2499.00, department: 'Furniture' },
  { name: 'Jim', sales: 10000.00, department: 'Automotive' }
] 

@Component({
    selector: 'aap-data-table',
    imports: [MatTableModule],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  displayColumns: string[] = [
    'col-name',
    'col-sales',
    'col-department'
  ]
  dataSource = sales_data;

}
