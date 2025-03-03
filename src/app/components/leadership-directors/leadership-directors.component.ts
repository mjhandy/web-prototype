import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-leadership-directors',
  imports: [],
  standalone: true,
  templateUrl: './leadership-directors.component.html',
  styleUrl: './leadership-directors.component.scss'
})
export class LeadershipDirectorsComponent {

  @Input() data: any;

  constructor( ) { }

  ngOnInit() {


  }

}
