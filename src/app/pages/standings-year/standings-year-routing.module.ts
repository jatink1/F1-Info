import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingsYearPage } from './standings-year.page';

const routes: Routes = [
  {
    path: '',
    component: StandingsYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandingsYearPageRoutingModule {}
