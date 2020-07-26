import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
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
    this.route.navigate(['/standings-year']);
  }

  about() {
    this.route.navigate(['/about']);
  }
}
