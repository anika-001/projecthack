import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.scss']
})
export class FootprintComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
