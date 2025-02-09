import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  message: string = '';  
  private snackBar = inject(MatSnackBar);
  constructor(
    private translate: TranslateService
  ) { }

  openSBAlert(message: string) {
    this.message = this.translate.instant('snackbar.' + message   );
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-alert']
    });
  }

  openSBError(message: string){
    this.message = this.translate.instant('snackbar.' + message   );
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-error']
    });
  }
}
