import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {

  constructor() { }
  popup: boolean = false;
  ngOnInit(): void {
  }

}
