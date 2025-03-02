import { Component } from '@angular/core';
import { AboutUsNavComponent } from './about-us-nav/about-us-nav.component';

@Component({
    selector: 'app-about-us',
    imports: [AboutUsNavComponent],
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
