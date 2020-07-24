import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-one', //route for navigating to pageOne
    loadChildren: () => import('./pages/page-one/page-one.module').then(m => m.PageOnePageModule)
  },
  {
    path: 'page-one/:id', //route for navigating to pageOne by id and resolving data using dataResolver
    resolve: {
      service:DataResolverService
    },
    loadChildren: () => import('./pages/page-one/page-one.module').then( m => m.PageOnePageModule)
  },
  {
    path: 'pagetwo',
    loadChildren: () => import('./pages/pagetwo/pagetwo.module').then(m => m.PagetwoPageModule)
  },
  {
    path: 'pagetwo/:id',
    resolve: {
      service: DataResolverService
    },
    loadChildren: () => import('./pages/pagetwo/pagetwo.module').then( m => m.PagetwoPageModule)
  },
  {
    path: 'page-three',
    loadChildren: () => import('./pages/page-three/page-three.module').then(m => m.PageThreePageModule)
  },
  {
    path: 'page-three/:id',
    resolve: {
      service: DataResolverService
    },
    loadChildren: () => import('./pages/page-three/page-three.module').then( m => m.PageThreePageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule)
  },
  {
    path: 'circuits',
    loadChildren: () => import('./pages/circuits/circuits.module').then( m => m.CircuitsPageModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./pages/standings/standings.module').then( m => m.StandingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/abouts/abouts.module').then( m => m.AboutsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
