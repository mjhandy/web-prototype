import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GeolocationService } from '../../../services/geolocation.service';

@Component({
  selector: 'aap-footer-map',
  imports: [
    GoogleMap
  ],
  templateUrl: './footer-map.component.html',
  styleUrl: './footer-map.component.scss'
})
export class FooterMapComponent {
  lat: string | undefined;
  long: string | undefined;
  apiKey = 'AIzaSyCgKaxzYJNTn_yOXudF-zX8_cmAsOV7CEU';

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral | undefined;

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
