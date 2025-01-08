import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface SalesInfo {
  id: number,
  name: string,
  sales: number,
  department: string
}

const SALES_DATA: SalesInfo[] = [
  { id:1, name: 'Bob', sales: 1234.45, department: 'Appliances'},
  { id:2, name: 'Alice', sales: 87654.23, department: 'Electronics'}
];



@Component({
  selector: 'aap-data-table',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  displayColumns: string[] = [
    'col-name',
    'col-sales',
    'col-department'
  ]
  dataSource = SALES_DATA;

}
