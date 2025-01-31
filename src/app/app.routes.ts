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
      description: 'This is the Web Prototype home page',
      label: 'nav.home',
      showInFooter: true,  
      showInSiteMap: true,
      loc: '/en',
      lastmod: "20250-01-01",
      changefreq: "daily",
      priority: "1.0",

    }    
  },
  {
    path: 'en/about-us',    
    loadComponent: () => import('./pages/about-us/about-us.component').then((d) => d.AboutUsComponent),
    title: 'English About Us ! Web Prototype',
    data:{      
      description: 'This is he Web Prototype About Us pages',
      label: 'nav.aboutUs',      
      showInFooter: true,
      showInSiteMap: true,
      loc: '/en/about-us',
      lastmod: "20250-01-01",
      changefreq: "daily",
      priority: "1.0",
    }  
  },
  {
    path: 'en/api-feed',    
    loadComponent: () => import('./pages/api-feed/api-feed.component').then((d) => d.ApiFeedComponent),
    title: 'English API Feed | Web Prototype',
    data:{      
      description: 'This is the Web Prototype API Feed',
      label: 'nav.apiFeed',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/packages',
    loadComponent: () => import('./pages/packages/packages.component').then((d) => d.PackagesComponent),
    title: 'Our Pakcages | Web Prototype',
    data:{
      description: 'This is the Web Prototype Packages Page',
      label: 'nav.packages',      
      showInFooter: true,
      showInSiteMap: true,
    }
  },
  {
    path: 'en/news-feed',    
    loadComponent: () => import('./pages/news-feed/news-feed.component').then((d) => d.NewsFeedComponent),
    title: 'English News Feed API | Web Prototype',
    data:{      
      description: 'This is the Web Prototype News Feed',
      label: 'nav.newsFeed',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },

  {
    path: 'en/sign-up',    
    loadComponent: () => import('./pages/sign-up/sign-up.component').then((d) => d.SignUpComponent),
    title: 'English Sign Up Form ! Web Prototype',
    data:{      
      description: 'This is the Web Prototype Sign Up',
      label: 'nav.signUp',      
      showInFooter: true,
      showInSiteMap: true,
    }  
  },
  {
    path: 'en/components/accordions',
    loadComponent: () => import('./pages/components/accordions/accordions.component').then((d) => d.AccordionsComponent),
    title: 'Accordion Components | Web Prototype',
    data: {
      description: 'Themed accordion componet',
      label: 'nav.accordions',
      showInFooter: true,
      showInSiteMap: true
    }
  },
  {
    path: 'en/components/tables',
    loadComponent: () => import('./pages/components/tables/tables.component').then((d) => d.TablesComponent),
    title: 'Soratable Data Tables Components | Web Prototype',
    data: {
      description: 'Sortable data driven tables',
      label: 'nav.tables',
      showInFooter: true,
      showInSiteMap: true
    }
  },
  {
    path: 'en/site-map',    
    loadComponent: () => import('./pages/site-map/site-map.component').then((d) => d.SiteMapComponent),
    title: 'English SIte Map | Web Prototype',
    data:{      
      description: 'This is the Web Prototype Site Map',
      label: 'nav.siteMap',      
      showInFooter: true,
      showInSiteMap: false,
    }  
  },   

  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  },
];
