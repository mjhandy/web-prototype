import { Component } from '@angular/core';

import { AboutUsNavComponent } from '../about-us-nav/about-us-nav.component';
@Component({
  selector: 'aap-leadership',
  imports: [AboutUsNavComponent],
  standalone: true,
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {

}
