import { Component, OnInit } from '@angular/core';
import { saferoom } from '../JsonData/saferoom';
// import { AngularTiltModule } from 'angular-tilt';

@Component({
  selector: 'app-saferoom',
  templateUrl: './saferoom.component.html',
  styleUrls: ['./saferoom.component.scss']
})
export class SaferoomComponent implements OnInit {

  constructor() { }
  safedata:any;
  // image_url = 

  ngOnInit(): void {
    this.safedata= saferoom;
  }

}
