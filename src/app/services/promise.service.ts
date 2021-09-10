import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private http:HttpClient) { }

  createUsersPromise():Promise<User[]>
  {
    var url ='https://reqres.in/api/users'
    let promise = new Promise<User[]>((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          res => { // Success
            // reject("Success Error");
            const result=JSON.parse(JSON.stringify( res));
            let usersArray:User[]=result.data;
            resolve(usersArray);
          },
          msg => { // Error
                    console.log('http call failed');
                    console.log(msg);
                    reject(msg);
          }
        );
    });
    return promise;
  }
}
