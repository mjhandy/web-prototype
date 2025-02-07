import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  
    private snackBar = inject(MatSnackBar);
    message = 'this is a test';
    

  constructor() { }

  openSBAlert(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['snack-alert']
    });
  }

  openSBError(message: string){
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['snack-error']
    });
  }


}
