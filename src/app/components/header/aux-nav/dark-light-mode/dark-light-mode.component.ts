import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackBarService } from '../../../../services/snack-bar.service';
import { LocalStorageService } from '../../../../services/local-storage-service';

@Component({
  selector: 'aap-dark-light-mode',
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
  snackMessageEN: string = "";
  snackMessageFR: string = "";
  body = document.body;
  private _snackBar = inject(MatSnackBar);


  constructor(
    private LocalStorageService: LocalStorageService,
    private snackBar: SnackBarService
  ) {
    // console.log(this.body);
  }

  ngOnInit() {
    const lang = this.LocalStorageService.getItem('lang');
    this.checkMode();
  }

  checkMode() {
    const lightMode = this.LocalStorageService.getItem('mode');
    if (lightMode) {
      this.mode = lightMode;
    }
    else {
      this.mode = 'light'
      this.LocalStorageService.setItem('mode', 'light');
    }
    this.body.setAttribute('data-bs-theme', this.mode);
  }

  modeSwitch() {
    if (this.mode === 'light') {
      this.mode = 'dark';
      this.snackMessageEN = "Dark Mode Enabled";
      this.snackMessageFR = "Mode sombre activé";
      this.snackBar.openSBAlert(this.snackMessageEN, this.snackMessageFR);
    }
    else {
      this.mode = 'light';
      this.snackMessageEN = "Light Mode Enabled";
      this.snackMessageFR = "Mode d'éclairage activé";
      this.snackBar.openSBAlert(this.snackMessageEN, this.snackMessageFR);
    }
    this.body.setAttribute('data-bs-theme', this.mode);
    this.LocalStorageService.setItem('mode', this.mode);
  }
}
