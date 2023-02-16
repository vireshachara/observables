import { Component, OnInit } from '@angular/core';
import { filter, from, map, observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  array = [10, 20, 30, 40, 50];

  myObservable = from(this.array);
  //map operater
  transformedData = this.myObservable.pipe(
    map((val) => {
      return val * 5;
    }), 
    // filter ((val)=>{                    // inside map operater we can use filter operater
    //   return val < 100 ;   
    // })
    );

  ngOnInit(): void {
    this.transformedData.subscribe((data)=>{
      console.log(data)
    }, (error) => {
      console.log(error.message)
    }, ()=> {
      console.log("Map operater emits the values Successfully")
    })
  }
}
