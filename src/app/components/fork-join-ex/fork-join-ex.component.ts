import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';

@Component({
  selector: 'app-fork-join-ex',
  templateUrl: './fork-join-ex.component.html',
  styleUrls: ['./fork-join-ex.component.css']
})
export class ForkJoinExComponent implements OnInit {
  users:User[];

  constructor(private rx:RxJsTricksService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.LoadUsersInParallel();
  }
  
  LoadUsersInParallel(){
    this.users=[];
    this.rx.getUsersForkJoin().subscribe(response => {
      console.log(response);
      console.log(response[0]);
      console.log(response[1]);
      console.log(response[2]);
      console.log(response[3]);
    }, err => {
      console.log(err);
    });

  }

}
