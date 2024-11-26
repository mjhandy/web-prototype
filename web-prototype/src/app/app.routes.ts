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
      label: 'nav.home',
      showInFooter: true,  
      showInSiteMap: true,
    }    
  },
  {
    path: 'en/api-feed',    
    loadComponent: () => import('./pages/api-feed/api-feed.component').then((d) => d.ApiFeedComponent),
    title: 'English API Feed | Web Prototype',
    data:{      
      desciption: 'This is the Web Prototype API Feed',
      label: 'nav.apiFeed',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/news-feed',    
    loadComponent: () => import('./pages/news-feed/news-feed.component').then((d) => d.NewsFeedComponent),
    title: 'English News Feed API | Web Prototype',
    data:{      
      desciption: 'This is the Web Prototype News Feed',
      label: 'nav.newsFeed',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/sign-up-reactive',        
    loadComponent: () =>  import('./pages/form/form.component').then((d)  => d.FormComponent),    
    title: 'English Sign Up Form ! Web Prototype',
    data:{      
      desciption: 'This is the Web Prototype About Us pages',
      label: 'nav.signUp',
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/sign-up-dynamic',    
    loadComponent: () => import('./pages/sign-up/sign-up.component').then((d) => d.SignUpComponent),
    title: 'English Sign Up Form ! Web Prototype',
    data:{      
      desciption: 'This is the Web Prototype About Us pages',
      label: 'nav.signUp',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/site-map',    
    loadComponent: () => import('./pages/site-map/site-map.component').then((d) => d.SiteMapComponent),
    title: 'English SIte Map | Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype Site Map',
      label: 'nav.siteMap',      
      showInFooter: true,
      showInSiteMap: false,
    }  
  },   
  {
    path: 'en/about-us',    
    loadComponent: () => import('./pages/about-us/about-us.component').then((d) => d.AboutUsComponent),
    title: 'English About Us ! Web Prototype',
    data:{      
      desciption: 'This is he Web Prototype About Us pages',
      label: 'nav.aboutUs',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  }
];
