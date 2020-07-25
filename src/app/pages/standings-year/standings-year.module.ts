import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandingsYearPageRoutingModule } from './standings-year-routing.module';

import { StandingsYearPage } from './standings-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandingsYearPageRoutingModule
  ],
  declarations: [StandingsYearPage]
})
export class StandingsYearPageModule {}
