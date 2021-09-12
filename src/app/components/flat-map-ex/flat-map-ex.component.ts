import { Component, OnInit } from '@angular/core';
import { RxJsTricksService } from 'src/app/services/rx-js-tricks.service';
import { flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-flat-map-ex',
  templateUrl: './flat-map-ex.component.html',
  styleUrls: ['./flat-map-ex.component.css']
})
export class FlatMapExComponent implements OnInit {

  constructor(private rx:RxJsTricksService) { }

  ngOnInit(): void {
    this.LoadUsingFlatMap();
  }

  LoadUsingFlatMap()
  {
    this.rx.mergeMapInsteadOfflatMapCalls().subscribe(
    result=>{console.log(result);},
    err=>{console.log(err);}
    );
  }

}
