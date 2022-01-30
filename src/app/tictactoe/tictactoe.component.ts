import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  constructor() { }

  @Input() value: 'X' | 'O';

  ngOnInit(): void {
  }

}
