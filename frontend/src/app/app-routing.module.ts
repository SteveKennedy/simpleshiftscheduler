import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/schedules',
    pathMatch: 'full'
  },  
  {
    path: 'pages/schedules',
    loadChildren: () => import('./pages/schedules/schedules.module').then( m => m.SchedulesPageModule)
  },
  {
    path: 'pages/people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'pages/shifts',
    loadChildren: () => import('./pages/shifts/shifts.module').then( m => m.ShiftsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
