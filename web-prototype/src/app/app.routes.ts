import { Routes } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },
  {
    path: 'en',
    component: HomeComponent,
    title: 'English Home Page ! Web Prototype',
  },
  {
    path: 'en/about-us',
    component: AboutUsComponent,
    title: 'English About Us ! Web Prototype',
    data:{
      seo:{        
        metaTags:[
          {name: 'description', content:'This is the web prototype about us page'}
        ]
      }
    }  
  }
];
