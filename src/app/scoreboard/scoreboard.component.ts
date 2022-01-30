import { AbstractType, Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scores: Array<any> = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getscores();
  }

  getscores(){
    this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").snapshotChanges().subscribe((res: any) => {
      this.scores = [];
      res.forEach(element => {
        this.scores.push({"Score": element.payload.doc.data().Score, "name": element.payload.doc.data().name})
      });
      this.scores.sort(function(a,b){return a["Score"] - b["Score"]});
      this.scores.reverse();
      console.log("sorted", this.scores);
    })
  }

}
