import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map, startWith, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxJsTricksService {

  userId:BehaviorSubject<string>=new BehaviorSubject<string>('1');
  constructor(private http:HttpClient) { }
  getUserById():Observable<any>
  {
    const res= this.userId.pipe(
                                  //tap(item=>console.log('getting tapped' + item)),
                                  // map(searchTerm=>console.log(searchTerm))
                                  concatMap(uid=>{ return this.http.get<any>(`https://reqres.in/api/users/${uid}`)})
                                );
    return res;
  }

  getLazySearch(searchTerm:string):Observable<any>
  {
    return this.http.get<any>(`https://reqres.in/api/users/${searchTerm}`);
  }
}
