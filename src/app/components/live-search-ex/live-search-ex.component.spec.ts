import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSearchExComponent } from './live-search-ex.component';

describe('LazySearchExComponent', () => {
  let component: LiveSearchExComponent;
  let fixture: ComponentFixture<LiveSearchExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSearchExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSearchExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
