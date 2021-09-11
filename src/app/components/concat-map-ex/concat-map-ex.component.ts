import { Component, OnInit } from '@angular/core';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';

@Component({
  selector: 'app-concat-map-ex',
  templateUrl: './concat-map-ex.component.html',
  styleUrls: ['./concat-map-ex.component.css']
})
export class ConcatMapExComponent implements OnInit {

  constructor(private rx:RxJsTricksService) { }

  ngOnInit(): void {
    this.getUserDetailsById();
  }

  CallUserId(userId:any)
  {
    this.rx.userId.next(userId);
  }

  getUserDetailsById()
  {
    this.rx.getUserById().subscribe(
     (user) =>  {console.log(user);}
     ,(err) => {console.log(err);}      
  );
  }

}
