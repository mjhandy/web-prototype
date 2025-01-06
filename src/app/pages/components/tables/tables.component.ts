import { Component } from '@angular/core';
import { DataTableComponent } from '../../../components/data-table/data-table.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    DataTableComponent
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

}
