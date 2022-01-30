import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
// import { Howl, Howler } from 'Howler';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import * as $ from 'jquery';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit {

  private ctx: AudioContext;

  topics: Array<any> = [];

  topicnames: Array<string> = [];
  maxplayer: any;
  currentquestion: any;
  ismyquestion: boolean = false;
  picked: boolean = false;
  status: boolean = false;
  levels = { 0: "Easy", 1: "Medium", 2: "Difficult" }
  donex = [];
  doney = [];
  questionnow: any;
  optionsnow: any = [];
  questions: Array<any> = [{}, {}, {}];
  noofplayers = 0;
  curx;
  cury;
  scores: any;
  correct: boolean = false;
  gameend: boolean = false;
  plus = 0;
  minus = 0;
  gamename = "";
  generated: boolean = false;
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {

    if (!localStorage.getItem("code")) {
      this.router.navigate(["/createroom"]);
    }

    if (localStorage.getItem("code")) {
      this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
        if (res.type == "removed" || !res) {
          localStorage.removeItem("code");
          localStorage.removeItem("name");
          localStorage.removeItem("player");
          this.router.navigate(["/createroom"]);
        }
      })

    }
    this.getmaxplayersandstatus();

    this.getnumberofplayers();
    this.gettopics();
    // this.getquestions();
    // if()
    // this.startmusic();
  }

  getmaxplayersandstatus() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
      this.maxplayer = res.payload.data().maxplayers;
      this.status = res.payload.data().status;
      this.gamename = res.payload.data().createdby;
    })
  }

  getnumberofplayers() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").snapshotChanges().subscribe((res: any) => {
      this.noofplayers = res.length;
      this.scores = res;
      // console.log("...", this.scores);
      this.getturn();
    })
  }

  getturn() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).snapshotChanges().subscribe((res: any) => {
      // // console.log(res.payload.data())
      if (res.payload.data().Turn == 9 * this.maxplayer) { this.gameend = true; } else this.gameend = false;
      if (res.payload.data().Turn % Number(this.maxplayer) == Number(localStorage.getItem("player"))) this.ismyquestion = true;
      else { this.ismyquestion = false; this.picked = false }
    })
  }

  gettopics() {
    this.db.collection("Topics").snapshotChanges().subscribe((res: any) => {
      if (this.topics.length == 3) return;
      for (let i of [1, 2, 3]) {
        var rand = Math.trunc(Math.random() * (res.length));
        this.topics.push(res[rand].payload.doc.id);
        this.topicnames.push(res[rand].payload.doc.data().name)
        // console.log(res)
        res.splice(rand, 1);
      }
      // console.log(this.topics);
      this.getquestions();
    })
  }

  // getquestion() {

  // }
  getquestions() {
    for (let x of [0, 1, 2]) {
      this.db.collection("Topics").doc(this.topics[x]).collection("Easy").snapshotChanges().subscribe(res => {
        // for (let i of [0, 1, 2]) {
        // if (this.questions[x].length != 3) {
        var rand = Math.trunc(Math.random() * (res.length));
        this.questions[x]["Easy"] = (res[rand].payload.doc.id);
        res.slice(rand, 1);
        // console.log(this.questions)
        // }

        this.db.collection("Topics").doc(this.topics[x]).collection("Medium").snapshotChanges().subscribe(res => {
          // for (let i of [0, 1, 2]) {
          // if (this.questions[x].length != 3) {
          var rand = Math.trunc(Math.random() * (res.length));
          this.questions[x]["Medium"] = (res[rand].payload.doc.id);
          res.slice(rand, 1);
          // console.log(this.questions)
          // }

          this.db.collection("Topics").doc(this.topics[x]).collection("Difficult").snapshotChanges().subscribe(res => {
            // for (let i of [0, 1, 2]) {
            // if (this.questions[x].length != 3) {
            var rand = Math.trunc(Math.random() * (res.length));
            this.questions[x]["Difficult"] = (res[rand].payload.doc.id);
            res.slice(rand, 1);
            this.generated = true;
            // console.log(this.questions)
            // }

            // }
          })
          // }
        })
        // }

      })


    }
  }

  bla() {
    // console.log(this.questions);
  }

  startgame() {
    this.db.collection("Rooms").doc(localStorage.getItem("code")).update({ status: true });
  }
  question(x, y) {
    this.curx = x;
    this.cury = y;
    // console.log(this.donex, (x*3)+y,((x*3)+y) in this.donex )
    if (this.inarr((x * 3) + y)) return;
    // this.donex.push(x);
    // this.doney.push(y);
    this.donex.push(((x * 3) + y))
    // console.log(this.donex)
    // if(x in this.done) return;
    // this.done.push({x: y});
    this.picked = true;
    // this.questionnow = {}
    // console.log(this.topics[x], this.levels[y], this.questions[x][this.levels[y]])
    this.db.collection("Topics").doc(this.topics[x]).collection(this.levels[y]).doc(this.questions[x][this.levels[y]]).snapshotChanges().subscribe(res => {
      // // console.log(res.payload.data());
      this.questionnow = res;
      // console.log(this.questionnow.payload.data())
      if (this.optionsnow.length == 4) return
      this.optionsnow.push(res.payload.data().o1, res.payload.data().o2, res.payload.data().o3, res.payload.data().o4)
      // // console.log(this.questionnow.doc.data())
    })
  }

  inarr(elem) {
    for (let x of this.donex) {
      if (elem == x) return true
    }
    return false;
  }

  answer() {
    var increment = firebase.firestore.FieldValue.increment(1);
    this.db.collection("Rooms").doc(localStorage.getItem("code")).update({ Turn: increment });
  }

  ngOnDestroy(): void {
    localStorage.removeItem("code");
    localStorage.removeItem("name");
    localStorage.removeItem("player");
  }

  endsession() {
    var name = localStorage.getItem("name");
    var code = localStorage.getItem("code");
    this.db.collection("Rooms").doc(code).collection("Players").doc(name).delete().then(res => {
      this.db.collection("Rooms").doc(name).collection("Players").snapshotChanges().subscribe((res: any) => {
        // console.log(res.length == 0);

        if (!res || res == undefined || res.type == "removed" || res.length == 0) { this.db.collection("Rooms").doc(code).delete().then(res => { this.router.navigate(['/createroom']) }); }
        else this.router.navigate(['/createroom'])
      })
    })
    localStorage.removeItem("code");
    localStorage.removeItem("name");
    localStorage.removeItem("player");

  }

  getcode() {
    return localStorage.getItem("code");
  }
  check(x) {
    this.picked = false;
    // console.log(this.questionnow)
    // console.log(x.toString(), this.questionnow.payload.data().Answer, this.questionnow.payload.data().Answer.split("o")[1])
    var increment;
    if (x.toString() == (this.questionnow.payload.data().Answer).split("o")[1]) {
      // console.log("correct");
      // this.stopmusic();
      // var temp = this.sound;
      // this.sound1.play();
      // this.sound1.on('end', function () {
      //   console.log('Finished!');
      //   temp.play();
      // });

      // this.correct = true;
      this.plus = (this.cury + 1) * 200 * Number(this.questionnow.payload.data().Multiplier)
      // $(".correct").css("display", "block");
      $(".ppoints").css("display", "block");
      $("#corrimg").css("display", "block");
      if (this.questionnow.payload.data().Multiplier > 1) { $("#mulimg").css("display", "block"); }
      increment = firebase.firestore.FieldValue.increment((this.cury + 1) * 200 * Number(this.questionnow.payload.data().Multiplier));

      // setInterval(function(){ $(".correct").css("display", "none"); clearInterval()}, 3000);

      setInterval(function () { $(".ppoints").css("display", "none"); $("#corrimg").css("display", "none"); $("#mulimg").css("display", "none"); clearInterval(); }, 3000);

    }
    else {
      increment = firebase.firestore.FieldValue.increment(-1 * (this.cury + 1) * 100);
      this.minus = -1 * (this.cury + 1) * 100;
      $(".npoints").css("display", "block");
      setInterval(function () { $(".npoints").css("display", "none"); clearInterval() }, 3000);

    }
    this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").doc(localStorage.getItem("name")).update({ "Score": increment })
    this.questionnow = {};
    this.optionsnow = [];
    this.answer();

  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.endsession();
  }

  endgame() {
    this.endsession();
  }

  popup: boolean = true;
  // sound: any = new Howl({
  //   src: ['../../assets/audio/sound.mp3'],
  //   volume: 0.2
  // });
  // sound1: any = new Howl({
  //   src: ['../../assets/audio/cheer.mp3'],
  //   volume: 0.2
  // });
  // startmusic() {
  //   this.sound.play();
  //   console.log("start")
  // }
  // stopmusic() {
  //   this.sound.pause();
  //   console.log("stop");
  // }

}
