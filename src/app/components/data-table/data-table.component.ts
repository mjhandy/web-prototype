import { Component } from '@angular/core';

@Component({
  selector: 'aap-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  td = [
    { name: 'Bob', sales: '$2499.00', department: 'Furniture' },
    { name: 'Jim', sales: '$10,000.00', department: 'Automotive' }
  ]

}
