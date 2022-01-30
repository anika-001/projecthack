import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  Image: any;
  Message: any;
  Comics:any;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    AOS.init();
    this.myfirebasefunc();
  }
  myfirebasefunc() {
    this.db.collection("Comicdata").snapshotChanges().subscribe((res: any) => {
    this.Comics = res;
    res.sort(function(a,b){return a.payload.doc.data().Number-b.payload.doc.data().Number});  
    })
  }
  
}
