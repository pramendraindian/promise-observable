import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { User } from './model/User';
import { PromiseService } from './services/promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private ps:PromiseService)
  {

  }
  users:User[]=[];
  ngOnInit(): void {
    this.getHttpPromise();
    // this.promiseBasics();
    // this.basicObservable();
  }
  title = 'promise-observable';

  promiseBasics() // Calling resolve function is important in order to get the value using THEN from PROMISE
  {
    const numberPromise = new Promise((resolveRajni,reject) => {
        //reject("reject message");
        resolveRajni(5);
        resolveRajni(10);
      });
  
    numberPromise.then(value => console.log("Promise will emit single value only "+ value)).
    catch(reject=>{console.log("catch block ::"+reject)}).
    finally(()=>{console.log("finally block::")});
    ////////////////////////////////////////////////////////////////
    //Example 2
    var promise_eg = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        console.log("timeout elapsed")
        resolve('foo');
      }, 300);
    });
    
    promise_eg.then(value=>{
      console.log("Has some value "+value);
      // expected output: "foo"
    }).catch((err)=>{console.log("Has Error "+err)}).
    finally(()=>console.log("has reached finally"));
    
    console.log(promise_eg);
  }

  basicObservable()
  {
    const numberObservable = new Observable((observerKanth) => {
      observerKanth.next(5);
      observerKanth.next(10);
      observerKanth.next(15);
      observerKanth.next(20);
      observerKanth.next(25);
      observerKanth.next(30);
      });

    numberObservable.subscribe(value => console.log("Observable will emit multiple value "+value));
  }
  getHttpPromise()
  {
    this.ps.createUsersPromise().then((response)=>
    {
      this.users=response;
      console.log(this.users);
    }
    ).
    catch((err)=>{console.log(err)}).
    finally(()=>console.log("http promise complete"));
  }
  
 

}

