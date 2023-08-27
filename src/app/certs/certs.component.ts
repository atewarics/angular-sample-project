import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent {

certNames:string[] =['Superman returns','KGF2','Dhoom 3','Batman'];

mylabel:string = 'default';
people: any[] = [
  {
    "name": "Douglas  Pace"
  },
  {
    "name": "Mcleod  Mueller"
  },
  {
    "name": "Day  Meyers"
  },
  {
    "name": "Aguirre  Ellis"
  },
  {
    "name": "Cook  Tyson"
  }
];


foo() {

  var d:Date=new Date();
  this.mylabel = ''+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
}



}
