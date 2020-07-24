import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  public teams: any;
  
  constructor(private http: HttpClient, private loadingCtrl:LoadingController ) { }

  async ngOnInit() {

    let loading = await this.loadingCtrl.create({
      message: 'Please wait ...',
      duration:1500
    })

    loading.present().then(() => {
      this.http.get('http://ergast.com/api/f1/constructors.json?limit=221').subscribe(res => {
        this.teams = res['MRData']['ConstructorTable']['Constructors'];
      })
    })
    loading.onDidDismiss();

  }

}
