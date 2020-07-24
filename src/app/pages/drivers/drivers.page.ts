import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  public names:any;

  constructor(private http:HttpClient, private loadingCtrl:LoadingController) { }

  async ngOnInit() {

    let loading = await this.loadingCtrl.create({
      message: 'Please wait..',
      duration:5100
    })

    loading.present().then(() => {
      this.http.get('http://ergast.com/api/f1/drivers.json?limit=850').subscribe(res => {
        this.names = res['MRData']['DriverTable']['Drivers'];
        //console.log(this.names)
      })
    })

    

  }

}
