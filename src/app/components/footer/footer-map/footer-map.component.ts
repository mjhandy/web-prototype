import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'aap-footer-map',
  imports: [
    GoogleMap
  ],
  templateUrl: './footer-map.component.html',
  styleUrl: './footer-map.component.scss'
})
export class FooterMapComponent {

  apiKey = 'AIzaSyCgKaxzYJNTn_yOXudF-zX8_cmAsOV7CEU';

  options: google.maps.MapOptions = {
    mapId: "footer_map",
    center: { lat: 44, lng: 147 },
    zoom: 3,
  };
  marker: google.maps.Marker | undefined;



  constructor(
    private LocalStorageService: LocalStorageService
  ) { }

  ngAfterViewInit(): void {
    
  }




}
