import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.page.html',
  styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {

  private data = [];
  
  constructor(private actRoute : ActivatedRoute) { }
  
  ngOnInit() {
    if (this.actRoute.snapshot.data['service']) {
      this.data = this.actRoute.snapshot.data['service'];
    }
  }

}
