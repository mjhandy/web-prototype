import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

export interface SalesInfo {
  id: number,
  name: string,
  sales: number,
  department: string
}
const SALES_DATA: SalesInfo[] = [
  { id: 1, name: 'Bob', sales: 1234.45, department: 'Appliances' },
  { id: 2, name: 'Alice', sales: 87654.23, department: 'Electronics' },
  { id: 3, name: 'John', sales: 683.91, department: 'Hardware' },
  { id: 4, name: 'Frank', sales: 256.87, department: 'Automotive' }
];

@Component({
  selector: 'aap-data-table',
  imports: [MatTableModule, MatSortModule],
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
    this.dataSource.sort = this.tbSort;
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
