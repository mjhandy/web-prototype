import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { TranslateModule, TranslateService } from "@ngx-translate/core";

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
  body = document.body;
  private _snackBar = inject(MatSnackBar);
  

  constructor(
    private translate: TranslateService,
    private LocalStorageService: LocalStorageService,
  ) {
    console.log(this.body);
  }

  ngOnInit(){
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
    
  }

  modeSwitch(){
    if (this.mode === 'light'){
      this.mode = 'dark'; 
      this.openSnackBar('Dark Mode enabled');
      
    }
    else {
      this.mode = 'light';
      this.openSnackBar('Light Mode enabled') 
    }
    this.body.setAttribute('data-bs-theme', this.mode);
    this.LocalStorageService.setItem('mode', this.mode);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '');
  }

}
