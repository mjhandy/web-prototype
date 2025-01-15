import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'aap-geo-location',
  imports: [],
  templateUrl: './geo-location.component.html',
  styleUrl: './geo-location.component.scss'
})
export class GeoLocationComponent {

  lat: string | undefined;
  long : string | undefined;


  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    this.getGeoLocation();
  }


  getGeoLocation() {
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      },
      error: (error) => {
        console.error('Error getting geolocation:', error);
      },
    });
  }

}
