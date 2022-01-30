import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fuelco2',
  templateUrl: './fuelco2.component.html',
  styleUrls: ['./fuelco2.component.scss']
})
export class Fuelco2Component implements OnInit {
  a=["Petrol", "Diesel", "LPG"];
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
    const body = {type: this.car1,litres: this.distance1};
    const options = { params: body, headers: headers };
    this.http.get<any>('https://carbonfootprint1.p.rapidapi.com/FuelToCO2e', options).subscribe(data => {
        // this.postId = data;
        console.log("lk");
        console.log(data);
        this.co2=data.carbonEquivalent;
    });

}

}
