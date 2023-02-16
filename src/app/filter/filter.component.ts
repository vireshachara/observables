import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  array = [25, 65, 35, 45, 30, 15 , 14, 12 , 10];

  myObservable = from(this.array);

 filteredValues = this.myObservable.pipe(filter (data =>{
    return data>30 ;
 }))

  ngOnInit(): void {
    this.filteredValues.subscribe((data)=> {
      console.log(data)
    }, (error)=> {
      console.log("Something went Wrong!!")
    }, ()=> {
      console.log("Filter operater completed successfully")
    })
  }

}
