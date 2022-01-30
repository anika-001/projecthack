import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  page1: boolean = true;
  showcont:boolean = false;
  page1cnt: number = 0;
  locations1 = [
    { x: '20', y: '35' },
    { x: '35', y: '70' },
    { x: '45', y: '50' },
    { x: '55', y: '85' },
    { x: '45', y: '10' },
    { x: '70', y: '35' },
  ]

  prob = [
    "Your Heart is Racing",
    "You're Trembling or feeling Numb",
    "Feeling Sweaty or Confused",
    "Your Chest feels Tight",
    "Your have a Feeling of Doom",
    "There is Shortness of Breath"
  ];

  soln = [
    "Ask for help, call a friend/help-line",
    "Count Backwards from 100 by 3's",
    "Go outside for a break",
    "Take slow even breaths via nose",
    "Find and focus on an object",
    "Book an appointment with a doctor"
  ];

  locations2 = [
    { x: '10', y: '45' },
    { x: '80', y: '45' },
    { x: '45', y: '25' },
    { x: '35', y: '75' },
    { x: '55', y: '60' },
    { x: '55', y: '95' },
  ]

  ngOnInit(): void {


  }

  click(x: any) {
    var temp = '#btn' + x;
    $(temp).css('display', 'none');
    $("#rect" + x).css('display', 'block');

    this.page1cnt++;
    if(this.page1cnt == this.locations1.length)
    {
      this.showcont = true;
    }
  }

  toggle(){
    this.page1 = !this.page1;
    console.log(this.page1+" Page1");
  }

}
