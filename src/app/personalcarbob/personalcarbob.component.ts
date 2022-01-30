import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personalcarbob',
  templateUrl: './personalcarbob.component.html',
  styleUrls: ['./personalcarbob.component.scss']
})
export class PersonalcarbobComponent implements OnInit {
outputmy:any;
  a=["Clothes(in KG)","Beef(in KG)","cheese(in KG)","fruits and veggies(in KG)","recycle plastic(in g)","recycle glass(in g))","plant a tree(number of trees)","Electricity (in kWh)","Phone call (in min)","Air Conditioner (in hour)","Plastic bag (number of units)"];
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
//  this.postreq();
 this.myFlag=false;
 if(this.car1=="Clothes(in KG)"){this.outputmy=this.distance1*16;}
 if(this.car1=="Beef(in KG)"){this.outputmy=this.distance1*26;}
 if(this.car1=="cheese(in KG)"){this.outputmy=this.distance1*10;}
 if(this.car1=="fruits and veggies(in KG)"){this.outputmy=this.distance1*0.40;}
 if(this.car1=="recycle plastic(in g)"){this.outputmy=this.distance1*-0.01;}
 if(this.car1=="recycle glass(in g))"){this.outputmy=this.distance1*-0.67;}
 if(this.car1=="plant a tree(number of trees)"){this.outputmy=this.distance1*-20;}
 if(this.car1=="Electricity (in kWh)"){this.outputmy=this.distance1*0.45;}
 if(this.car1=="Phone call (in min)"){this.outputmy=this.distance1*0.06;}
 if(this.car1=="Air Conditioner (in hour)"){this.outputmy=this.distance1*0.65;}
 if(this.car1=="Plastic bag (number of units)"){this.outputmy=this.distance1*0.03;}


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
