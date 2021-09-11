import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
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
   this. LazySearch();
  }

  LazySearch()
  {
      this.rx.searchUsingSwitchMap(this.myForm.controls['searchTerm'].valueChanges).subscribe(
        result=>{//success
            if(result instanceof HttpErrorResponse)
            {
              console.log(result.status)
            }
            else
            {
              this.user=result as User; 
              console.log(this.user);
            }
        }
        ,err=>{ // It will never reach in case of switvhMap
          console.log(err);
        },
        ()=>// It will never reach in case of switvhMap
        {console.log('search complete')}
      );
     
  

  }

}
