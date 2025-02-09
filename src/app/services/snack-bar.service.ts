import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from '../services/local-storage-service';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  message: string = '';
  
  private snackBar = inject(MatSnackBar);
  constructor(
    private LocalStorageService: LocalStorageService,
  ) { }

  openSBAlert(messageEN: string, messageFR: string) {
    this.messageLang(messageEN, messageFR);
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-alert']
    });
  }

  openSBError(messageEN: string, messageFR: string){
    this.messageLang(messageEN, messageFR);
    this.snackBar.open(this.message, '', {
      duration: 1500,
      panelClass: ['snack-error']
    });
  }

    messageLang(en: string, fr: string){
      const lng = this.LocalStorageService.getItem('lang');    
      if (lng === 'en') {
        return this.message = en;
      }
      else {
        return this.message = fr;
      }
    }

}
