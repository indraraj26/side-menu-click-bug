import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then((m) => m.HomePageModule),
	},
	{
		path: 'search-garage',
		loadChildren: () =>
			import('./search-garage/search-garage.module').then(
				(m) => m.SearchGaragePageModule,
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			// enableTracing: true,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
