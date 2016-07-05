import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [

{
  path: 'detail/:id',
  component: HeroDetailComponent
},

	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'heroes',
		component: HeroesComponent
	}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
