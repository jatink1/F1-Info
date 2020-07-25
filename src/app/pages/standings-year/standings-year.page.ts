import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/app/providers/data-provider.service';

@Component({
  selector: 'app-standings-year',
  templateUrl: './standings-year.page.html',
  styleUrls: ['./standings-year.page.scss'],
})
export class StandingsYearPage implements OnInit {
  
  constructor(private http:HttpClient,private route:Router,private data:DataProviderService) { }

  ngOnInit() {
    
  }

  viewStandings(year,round) {
    let dt = {
      year: year,
      round:round
    }
  
    this.data.setData('standings', dt);
    this.route.navigate(['standings/standings']);

   
  }

}
