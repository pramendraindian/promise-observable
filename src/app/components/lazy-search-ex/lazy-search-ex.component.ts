import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/User';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';

@Component({
  selector: 'app-lazy-search-ex',
  templateUrl: './lazy-search-ex.component.html',
  styleUrls: ['./lazy-search-ex.component.css']
})
export class LazySearchExComponent implements OnInit {
  myForm: FormGroup ;
  user:User;
  constructor(private formBuilder:FormBuilder,private rx:RxJsTricksService) { 
    this.user = {id:0,last_name:'',first_name:'',email:'',avatar:''};
    this.myForm = this.formBuilder.group({
      searchTerm: ['']
  });
  }
  ngOnInit(): void {
    
  
    this.myForm.controls['searchTerm'].valueChanges.subscribe(value => {
    console.log(value);
    this.rx.userId.next(value);
    this.LazySearch();
  });
  
  }

  LazySearch()
  {
    const searchObs= this.rx.userId.pipe(
      tap(emit=>console.log("emitting#"+emit)),
      map(term => term),
      //startWith('1'),
      debounceTime(400)
      //distinctUntilChanged()
    ); 
  
    const usersObs=searchObs.pipe(
    switchMap(search => this.rx.getLazySearch(search)) 
    ).subscribe( item=>
      {this.user=item as User; console.log(this.user);}
      /*
      map(item=>{
        this.user=item as User;
        console.log(this.user);
      })
        */
    );
  

  }

}
