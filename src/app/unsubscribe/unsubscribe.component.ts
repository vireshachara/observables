import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css'],
})
export class UnsubscribeComponent implements OnInit {
  constructor() {}

  counterObservable = interval(1000);

  counterSub: any;

  ngOnInit(): void {
    // this.counterSub = this.counterObservable.subscribe((data:any)=> {
    //   console.log(data)
    // })
  }

  unsubscribe() {
    this.counterSub.unsubscribe();
  }

  subscribe() {
    this.counterSub = this.counterObservable.subscribe((data) => {
   console.log(data)
    });
  }
}
