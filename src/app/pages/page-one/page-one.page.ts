import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {

  private data = [];

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    if (this.activateRoute.snapshot.data['service']) {
      this.data = this.activateRoute.snapshot.data['service'];  //recieving data from DataService
    }
    //console.log("DATA", this.data);
  }

}
