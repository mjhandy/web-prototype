import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { LocalStorageService } from '../../../../services/local-storage-service';

@Component({
  selector: 'aap-dark-light-mode',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule    
  ],
  templateUrl: './dark-light-mode.component.html',
  styleUrl: './dark-light-mode.component.scss'
})
export class DarkLightModeComponent {

  mode = '';
  message= '';
  body = document.body;
  private _snackBar = inject(MatSnackBar);
  

  constructor(
    private LocalStorageService: LocalStorageService,
  ) {
    // console.log(this.body);
  }

  ngOnInit(){
    const lang = this.LocalStorageService.getItem('lang');
    this.checkMode();
  }

  checkMode(){
    const lightMode = this.LocalStorageService.getItem('mode');
    if (lightMode){
      this.mode = lightMode;
    }
    else{
      this.mode = 'light'
      this.LocalStorageService.setItem('mode', 'light');
    }
    this.body.setAttribute('data-bs-theme', this.mode);
  }

  modeSwitch(){
    if (this.mode === 'light'){
      this.mode = 'dark'; 
      this.message = "Dark Mode Enabled";  
          }
    else {
      this.mode = 'light';
      this.message = "Light Mode Enabled";
    }
    this.openSnackBar(this.message);
    this.body.setAttribute('data-bs-theme', this.mode);
    this.LocalStorageService.setItem('mode', this.mode);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['alert-default']
    });
  }

}
