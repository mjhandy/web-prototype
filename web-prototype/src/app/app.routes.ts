import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },
  {
    path: 'en',    
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'English Home Page ! Web Prototype',
    data:{      
      desciption: 'This is the Web Prototype home page',
      label: 'Home'
    }    
  },
  {
    path: 'en/about-us',    
    loadComponent: () => import('./pages/about-us/about-us.component').then((d) => d.AboutUsComponent),
    title: 'English About Us ! Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype About Us pages',
    }  
  },
  {
    path: 'en/sign-up-reactive',        
    loadComponent: () =>  import('./pages/form/form.component').then((d)  => d.FormComponent),    
    title: 'English Sign Up Form ! Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype About Us pages'
    }  
  },
  {
    path: 'en/sign-up-dynamic',    
    loadComponent: () => import('./pages/sign-up/sign-up.component').then((d) => d.SignUpComponent),
    title: 'English Sign Up Form ! Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype About Us pages'
    }  
  },  
];
