import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { LocalStorageService } from '../../../../services/local-storage-service';

@Component({
  selector: 'aap-dark-light-mode',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './dark-light-mode.component.html',
  styleUrl: './dark-light-mode.component.scss'
})
export class DarkLightModeComponent {

  mode = '';
  body = document.body;
  

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
      
    }
    else {
      this.mode = 'light';
    }
    this.LocalStorageService.setItem('mode', this.mode);
  }

}
