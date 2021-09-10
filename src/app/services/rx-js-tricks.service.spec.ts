import { TestBed } from '@angular/core/testing';

import { RxJsTricksService } from './rx-js-tricks.service';

describe('RxJsTricksService', () => {
  let service: RxJsTricksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxJsTricksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
