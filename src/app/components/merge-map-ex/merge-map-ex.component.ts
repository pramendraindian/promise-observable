import { Component, OnInit } from '@angular/core';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';
import { flatMap} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-merge-map-ex',
  templateUrl: './merge-map-ex.component.html',
  styleUrls: ['./merge-map-ex.component.css']
})
export class MergeMapExComponent implements OnInit {
users:User[];
  constructor(private rx:RxJsTricksService) {
    this.users=[];
   }

  ngOnInit(): void {
    this.LoadUsingFlatMap();
  }

  LoadUsingFlatMap()
  {
    this.users=[];
    this.rx.mergeMapCalls().subscribe(
    result=>{
      if(result instanceof HttpErrorResponse)
      {

      }
      else
      {
        console.log(result?.data);
        this.users.push(result?.data);
        console.log(this.users.length);
      }
      
    
    },
    err=>{console.log(err);}
    );
  }

}
