import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.page.html',
  styleUrls: ['./pagetwo.page.scss'],
})
export class PagetwoPage implements OnInit {

  private data = [];
  
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit() {
    if (this.actRoute.snapshot.data['service']) {
      this.data = this.actRoute.snapshot.data['service'];
    }
  }

}
