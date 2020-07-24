import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataProviderService } from './providers/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  pageOneData = {
    teamName: 'Ferrari',
    raceStarts: 993,
    totalF1Wins: 237,
    totalPodiums: 766,
    totalWDC: 15,
    totalWCC: 16
  }

  pageThreeData = {
    teamName: 'Williams',
    raceStarts: 722,
    totalF1Wins: 114,
    totalPodiums: 312,
    totalWDC: 7,
    totalWCC: 9
  }

  pageTwoData = {
    teamName: 'McLaren',
    raceStarts: 866,
    totalF1Wins: 182,
    totalPodiums: 487,
    totalWDC: 12,
    totalWCC: 8
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private dataService:DataProviderService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  teams() {
    this.route.navigate(['/teams']);
  }

  drivers() {
    this.route.navigate(['/drivers']);
  }

  circuits() {
    this.route.navigate(['/circuits']);
  }

  standings() {
    this.route.navigate(['/standings']);
  }

  about() {
    this.route.navigate(['/about']);
  }
}
