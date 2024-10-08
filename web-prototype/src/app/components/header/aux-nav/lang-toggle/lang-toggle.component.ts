import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { LocalStorageService } from '../../../../services/local-storage-service';

@Component({
  selector: 'aux-lang-toggle',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    TranslateModule
  ],
  templateUrl: './lang-toggle.component.html',
  styleUrl: './lang-toggle.component.scss'
})
export class LangToggleComponent {

  

  constructor(
    private translate: TranslateService,
    private LocalStorageService: LocalStorageService,
  ) {

  }

  ngOnInit(){
    this.checkLang();
  }

  translateLanguageTo(lang: string){
    this.translate.use(lang);
    this.LocalStorageService.setItem('lang', lang);
  }

  setLang(lang:string){
    this.translate.use(lang);
  }

  checkLang() {
    const currentLang = this.LocalStorageService.getItem('lang');
    
    if (currentLang){
      console.log('current lang:', currentLang);
      this.setLang(currentLang);
    }
    else{
      console.log('lang not set');
      this.translateLanguageTo('en');
      console.log('en set as default lang');
    }

    
  }

}
