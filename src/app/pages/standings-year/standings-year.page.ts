import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/app/providers/data-provider.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-standings-year',
  templateUrl: './standings-year.page.html',
  styleUrls: ['./standings-year.page.scss'],
})
export class StandingsYearPage implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router,
    private data: DataProviderService,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {

  }

async  viewStandings(year, round) {
    
    

  let alert = await this.alertCtrl.create({
      header:year,
      buttons: [{
        text: 'Driver Standings',
        handler: () => {
          let dt = {
            year: year,
            round: round,
            type:'driver'
          };

          this.data.setData('driverStandings', dt);
          this.route.navigate(['standings/driverStandings']);
        }
      },
        {
          text: 'Constructor Standings',
          handler: () => {
            let dt = {
              year: year,
              round: round,
              type:'constructor'
            };
            this.data.setData('constructorStandings', dt);
            this.route.navigate(['standings/constructorStandings']);
          }
        }
      ]
    })

    await alert.present();
    
  }

}
