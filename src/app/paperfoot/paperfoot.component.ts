import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-paperfoot',
  templateUrl: './paperfoot.component.html',
  styleUrls: ['./paperfoot.component.scss']
})
export class PaperfootComponent implements OnInit {
  a=["kg","lb"];
  constructor(private http:HttpClient) { }
distance:any;
car:any;
 myFlag: boolean =true;
 co2:any;
 distance1:any;
 car1:any;
  ngOnInit(): void {
    this.myFlag=true;
  
}
 savemyvals(){
  this.distance1= this.distance;
 this.car1=this.car;
 console.log("user is"+this.distance +" Password is"+this.car);
 this.postreq();
 this.myFlag=false;
}
postreq(){
  const headers = { 'content-type': 'application/json',
    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
    'x-rapidapi-key': '21f05a919bmsh006432281901f7fp113deejsn5660fdc3d48d'
  };
    const body = {unit: this.car1,weight: this.distance1};
    const options = { params: body, headers: headers };
    this.http.get<any>('https://carbonfootprint1.p.rapidapi.com/TreeEquivalent', options).subscribe(data => {
        // this.postId = data;
        console.log("lk");
        console.log(data);
        this.co2=data.numberOfTrees;
    });

}

}
