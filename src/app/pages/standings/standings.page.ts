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
  public stans:any

  constructor(private route: Router, private actRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    //this.data = this.actRoute.snapshot.data['service'];
    this.year = this.actRoute.snapshot.data['service'].year;
    this.round = this.actRoute.snapshot.data['service'].round;
    this.http.get('http://ergast.com/api/f1/' + this.year + '/' + this.round + '/constructorstandings.json').subscribe(res => {
      this.stans = res['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];
      console.log(this.stans);
      
    })
  console.log(this.year)
  }

}
