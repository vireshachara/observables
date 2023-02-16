import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  array1= [1,2,3,4,5];
  array2= ["a","b","c","veeresh"];
  
  // of operater
  myObservable1 = of(this.array1, this.array2)


  ngOnInit(): void {
    this.myObservable1.subscribe((data: any)=> {
      console.log(data)
    }, (error)=>{
      console.log("Something went Wrong!!")
    }, ()=>{
      console.log("of operater completed successfully")
    })
  }

}
