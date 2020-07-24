import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/app/providers/data-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //objects to be sent to page one,two and three
  
  pageOneData = {
    teamName: 'Ferrari',
    raceStarts:993,
    totalF1Wins: 237,
    totalPodiums: 766,
    totalWDC: 15,
    totalWCC:16
  }

  pageThreeData = {
    teamName: 'Williams',
    raceStarts:722,
    totalF1Wins: 114,
    totalPodiums: 312,
    totalWDC: 7,
    totalWCC: 9
  }

  pageTwoData = {
    teamName: 'McLaren',
    raceStarts:866,
    totalF1Wins: 182,
    totalPodiums: 487,
    totalWDC: 12,
    totalWCC: 8
  }

  constructor(private router:Router, private dataService: DataProviderService) {}

  //sending data to page one using dataService and then navigating to page one
  toPageOne() {
    this.dataService.setData('ferrari', this.pageOneData); //dataService
    this.router.navigateByUrl('/page-one/ferrari'); //navigating to page one
  };

  //sending data to page two using dataService and then navigating to page two
  toPageTwo() {
    this.dataService.setData('mclaren', this.pageTwoData); //dataService to send data
    this.router.navigate(['pagetwo/mclaren']);    //navigating to page two
  }

  //sending data to page three using dataService and then navigating to page three
  toPageThree() {
    this.dataService.setData('williams', this.pageThreeData);
    this.router.navigate(['page-three/williams']);
  }
  
}
