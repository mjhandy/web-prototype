import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule, MatSortable } from '@angular/material/sort';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import * as data from '../../Model/sales-data.json';

export interface SalesInfo {
  id: number,
  name: string,
  saleTotal: number,
  department: string
}

@Component({
  selector: 'aap-data-table',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CurrencyPipe],
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements AfterViewInit {

  @ViewChild('tbSort') tbSort = new MatSort();
  // @ViewChild(MatPaginator) paginator = MatPaginator;
  @ViewChild('paginator') paginator!: MatPaginator;

  private _liveAnnouncer = inject(LiveAnnouncer);  
  salesData: any = (data as any).default;
  dataSource = new MatTableDataSource<SalesInfo>;
  totalSales: number | undefined;
  salesCount: number | undefined;

  displayColumns: string[] = [
    'col-name',
    'col-sales',
    'col-department'
  ]

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.salesData);
    this.dataSource.paginator = this.paginator;
    this.tbSort.sort(({ id: 'saleTotal', start: 'desc' }) as MatSortable); // sort sales high to low
    this.dataSource.sort = this.tbSort;

    this.salesCount = this.dataSource.data.length;

    // sales data
    this.totalSales = this.dataSource.data.reduce((acc, SALES_DATA) => acc + SALES_DATA.saleTotal, 0);

    console.log('total sales:', this.totalSales);
       
  }

  // total sales for the footer
  getTotalSales() {
    const totalSales = this.dataSource.data.reduce((acc, SALES_DATA) => acc + SALES_DATA.saleTotal, 0);
    
    return totalSales
  }

  // average sales
  getAverageSales(){
    
    const avargeSales = (this.dataSource.data.reduce((acc, SALES_DATA) => acc + SALES_DATA.saleTotal, 0)) / this.salesCount!;
    
     return avargeSales;
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
