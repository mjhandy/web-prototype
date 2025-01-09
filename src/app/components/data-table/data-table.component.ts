import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule, MatSortable } from '@angular/material/sort';

export interface SalesInfo {
  id: number,
  name: string,
  saleTotal: number,
  department: string
}

const SALES_DATA: SalesInfo[] = [
  { id: 1, name: 'Bob', saleTotal: 1234.45, department: 'Appliances' },
  { id: 2, name: 'Alice', saleTotal: 854.23, department: 'Electronics' },
  { id: 3, name: 'John', saleTotal: 683.91, department: 'Hardware' },
  { id: 4, name: 'Frank', saleTotal: 256.87, department: 'Automotive' },
  { id: 5, name: 'Ryan', saleTotal: 1234.45, department: 'Electronics' },
  { id: 6, name: 'Phil', saleTotal: 876.22, department: 'House Ware' },
  { id: 7, name: 'John', saleTotal: 5677.99, department: 'Furniture' }
];

@Component({
  selector: 'aap-data-table',
  imports: [MatTableModule, MatSortModule, CurrencyPipe],
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayColumns: string[] = [
    'col-name',
    'col-sales',
    'col-department'
  ]
  dataSource = new MatTableDataSource(SALES_DATA);

  @ViewChild('tbSort') tbSort = new MatSort();

  ngAfterViewInit() {    
    this.tbSort.sort(({ id: 'saleTotal', start: 'desc'}) as MatSortable);
    this.dataSource.sort = this.tbSort;
  }

  // total sales for the footer
  getTotalSales(){
    return this.dataSource.data.reduce((acc, SALES_DATA) => acc + SALES_DATA.saleTotal, 0);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
