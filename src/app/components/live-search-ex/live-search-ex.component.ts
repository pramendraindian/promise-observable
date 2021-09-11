import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/User';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';

@Component({
  selector: 'app-live-search-ex',
  templateUrl: './live-search-ex.component.html',
  styleUrls: ['./live-search-ex.component.css']
})
export class LiveSearchExComponent implements OnInit {
  myForm: FormGroup ;
  user:User;
  users:User[]=[];
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
              this.users=[];
              console.log(result.status)
            }
            else
            {
              if(result?.data?.length)
              {
                this.users=[];
                this.users=result?.data;
              }
              else
              {
                 this.users=[];
                  this.user=result.data as User; 
                  console.log(this.user);
                  this.users.push(this.user);
              }
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
