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
    data:{      
      desciption: 'This is the Web Prototype home page'
    }
    
  },
  {
    path: 'en/about-us',
    component: AboutUsComponent,
    title: 'English About Us ! Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype About Us pages'
    }  
  }
];
