import { Component, inject } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { AboutUsService } from '../../../services/navs/about-us.service';

@Component({
  selector: 'aap-about-us-nav',
  imports: [
    TranslateModule,
    RouterModule
  ],
  templateUrl: './about-us-nav.component.html',
  styleUrl: './about-us-nav.component.scss'
})
export class AboutUsNavComponent {

    private navigation = inject(AboutUsService);
  
    routes: Route[] = [];

    ngOnInit(): void {
      this.routes = this.getRoutes();
    }
  
    private getRoutes(): Route[] {
      return this.navigation.getAboutUsNavRouters();
    }

}
