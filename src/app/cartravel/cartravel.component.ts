import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cartravel',
  templateUrl: './cartravel.component.html',
  styleUrls: ['./cartravel.component.scss']
})
export class CartravelComponent implements OnInit {
 a=["","SmallDieselCar", "MediumDieselCar", "LargeDieselCar", "MediumHybridCar", "LargeHybridCar", "MediumLPGCar", "LargeLPGCar", "MediumCNGCar", "LargeCNGCar", "SmallPetrolVan", "LargePetrolVan", "SmallDielselVan", "MediumDielselVan", "LargeDielselVan", "LPGVan", "CNGVan", "SmallPetrolCar", "MediumPetrolCar", "LargePetrolCar", "SmallMotorBike", "MediumMotorBike", "LargeMotorBike"];
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
    const body = {distance: this.distance1, vehicle: this.car1};
    const options = { params: body, headers: headers };
    this.http.get<any>('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel', options).subscribe(data => {
        // this.postId = data;
        console.log("lk");
        console.log(data);
        this.co2=data.carbonEquivalent;
    });

}

}
