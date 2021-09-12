import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinExComponent } from './fork-join-ex.component';

describe('ForkJoinExComponent', () => {
  let component: ForkJoinExComponent;
  let fixture: ComponentFixture<ForkJoinExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkJoinExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkJoinExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
