import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/app/providers/data-provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {

  public year: number;
  public round: number;
  public stans: any;
  public stats: any;
  public type: any;

  constructor(private route: Router, private actRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    //this.data = this.actRoute.snapshot.data['service'];
    this.year = this.actRoute.snapshot.data['service'].year;
    this.round = this.actRoute.snapshot.data['service'].round;
    this.type = this.actRoute.snapshot.data['service'].type;

    if (this.type == 'constructor') {
      this.http.get('http://ergast.com/api/f1/' + this.year + '/' + this.round + '/constructorStandings.json').subscribe(res => {
        this.stans = res['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];
        console.log(this.stans);
      });
    } else {
      if (this.type == 'driver') {
        this.http.get('http://ergast.com/api/f1/' + this.year + '/' + this.round + '/driverStandings.json').subscribe(res => {
          this.stats = res['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
          console.log(this.stats);
        });
      }
    }
    
  console.log(this.year)
  }

}
