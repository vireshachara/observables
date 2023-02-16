import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  array1= [1,2,3,4,5];
  array2= ["a","b","c","veeresh"];
  
  // from operater
  myObservable1 = from(this.array1)


  ngOnInit(): void {
    this.myObservable1.subscribe((data: any)=> {
      console.log(data)
    }, (error)=>{
      console.log("Something went Wrong!!")
    }, ()=>{
      console.log("from operater completed successfully")
    })
  }

}
