import { Component, inject, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'aap-loading',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  private _snackBar = inject(MatSnackBar);
  @Input() snackType: string = "";
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() errorMessage: string = '';
  

  ngOnInit(){
    console.log('loading:', this.isLoading);
    console.log('Error:', this.isError);
    // this.openSnackBar(this.snackType, this.errorMessage);
  }

  openSnackBar(snackType: string, errorMessage: string) {

    const snackCSS = 'snack-' + snackType;
    if (errorMessage === ""){
      errorMessage = "Loaded";
    }
    this._snackBar.open(errorMessage, '', {
      
      panelClass: [snackCSS]
    });
  }

}
