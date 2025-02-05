import { Component, inject, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'aap-loading',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() errorMessage: string = '';
  

  ngOnInit(){
    console.log('loading:', this.isLoading);
    console.log('Error:', this.isError);
  }
}
