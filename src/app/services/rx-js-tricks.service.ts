import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap, debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RxJsTricksService {
  userId:BehaviorSubject<string>=new BehaviorSubject<string>('1');
  constructor(private http:HttpClient) { }

  searchUsingSwitchMap(searchStream:Observable<any>):Observable<any>
  {
   const serachResult= searchStream.pipe(
      tap(emit=>console.log("emitting#"+emit)),
      map(term => term),
      //startWith('1'),
      debounceTime(2000),
      distinctUntilChanged(),
      switchMap(term =>
          this.getLazySearch(term).pipe(
          //catchError(err => throwError(err))  // This will fail after 1 error
          catchError(err => {return of(err)})
        )
    )
    );
    return serachResult;

  }

  private getLazySearch(searchTerm:string):Observable<any>
  {
    return this.http.get<any>(`https://reqres.in/api/users/${searchTerm}`);
  }

  getUserById():Observable<any>
  {
    const res= this.userId.pipe(
                                  //tap(item=>console.log('getting tapped' + item)),
                                  // map(searchTerm=>console.log(searchTerm))
                                  concatMap(uid=>{ return this.http.get<any>(`https://reqres.in/api/users/${uid}`)})
                                );
    return res;
  }

  getUsersForkJoin(): Observable<any> {
    //Intentionally producting error with user 100, it will throw 404
    const response1 = this.http.get<any>(`https://reqres.in/api/users/100`).pipe(
      catchError(error => of(error))
      );
    const response2 = this.http.get<any>(`https://reqres.in/api/users/2`).pipe(
      catchError(error => of(error))
      );
    const response3 = this.http.get<any>(`https://reqres.in/api/users/3`).pipe(
      catchError(error => of(error))
      );
    const response4 = this.http.get<any>(`https://reqres.in/api/users/4`).pipe(
      catchError(error => of(error))
      );
    return forkJoin([response1, response2, response3, response4]);
  }



}
