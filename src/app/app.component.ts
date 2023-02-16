import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observable';
  // 1st Method
  // Using observale constructer ( next , error and complete)
  myObservable = new Observable((observer)=>{
    console.log("Observable starts")
    setTimeout(() => {observer.next("A")}, 1000)
    setTimeout(() => {observer.next("B")}, 2000)
    setTimeout(() => {observer.next("C")}, 3000)
    setTimeout(() => {observer.next("D")}, 4000)
    // setTimeout(() => {observer.error(new Error("Something went Wrong!! Please try again later"))}, 4000)
    setTimeout(() => {observer.next("E")}, 5000)
    setTimeout(() => {observer.next("F")}, 6000)
    setTimeout(() => {observer.complete()}, 8000)
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
  })
  // 2nd Method
  // Using observale create method ( next , error and complete)
  // myObservable = Observable.create((observer: { next: (arg0: string) => void; error: (arg0: Error) => void; complete: () => void; })=>{
  //   console.log("Observable starts")
  //   setTimeout(() => {observer.next("1")}, 1000)
  //   setTimeout(() => {observer.next("2")}, 2000)
  //   setTimeout(() => {observer.next("3")}, 3000)
  //   setTimeout(() => {observer.next("4")}, 4000)
  //   setTimeout(() => {observer.error(new Error("Something went Wrong!! Please try again later"))}, 4000)
  //   setTimeout(() => {observer.next("5")}, 5000)
  //   setTimeout(() => {observer.next("6")}, 6000)
  //   setTimeout(() => {observer.complete()}, 8000)
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
  // })

  ngOnInit(){
    //  this.myObservable.subscribe((data: any)=>{
    //   console.log(data)
    //  }, (error: { message: any; }) => {
    //   alert(error.message)
    //  }, ()=> {
    //   alert("Observer emitted all the values successfully")
    //   console.log("Observer emitted all the values successfully")
    //  })
     
  }

}





