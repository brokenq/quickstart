import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = <RouterConfig>[
  {
    path: 'heroes',
    component: HeroesComponent
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
