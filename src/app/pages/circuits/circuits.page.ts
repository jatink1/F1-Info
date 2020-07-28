import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.page.html',
  styleUrls: ['./circuits.page.scss'],
})
export class CircuitsPage implements OnInit {

  public circuits: any;
  
  constructor(private http:HttpClient, private loadingCtrl:LoadingController) { }

  async ngOnInit() {
    let loading = await this.loadingCtrl.create({
      message: "Please wait ...",
      duration: 1111
    })

    loading.present().then(() => {
      this.http.get('http://ergast.com/api/f1/circuits.json?limit=75').subscribe(res => {
        this.circuits = res['MRData']['CircuitTable']['Circuits'];
      })
    })
    
  }

}
