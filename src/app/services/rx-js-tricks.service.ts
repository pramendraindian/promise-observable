import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxJsTricksService {

  userId:BehaviorSubject<string>=new BehaviorSubject<string>('1');
  constructor(private http:HttpClient) { }
  getUserById():Observable<any>
  {
    const res= this.userId.pipe(
                                  tap(item=>console.log('getting tapped' + item)),
                                  concatMap(uid=>{ return this.http.get<any>(`https://reqres.in/api/users/${uid}`)})
                                );
    return res;

  }
}
