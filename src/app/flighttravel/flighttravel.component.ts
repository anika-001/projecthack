import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-flighttravel',
  templateUrl: './flighttravel.component.html',
  styleUrls: ['./flighttravel.component.scss']
})
export class FlighttravelComponent implements OnInit {
  a=["DomesticFlight", "ShortEconomyClassFlight", "ShortBusinessClassFlight", "LongEconomyClassFlight", "LongPremiumClassFlight", "LongBusinessClassFlight", "LongFirstClassFlight"];
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
    const body = {distance: this.distance1, type: this.car1};
    const options = { params: body, headers: headers };
    this.http.get<any>('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight', options).subscribe(data => {
        // this.postId = data;
        console.log("lk");
        console.log(data);
        this.co2=data.carbonEquivalent;
    });

}

}
