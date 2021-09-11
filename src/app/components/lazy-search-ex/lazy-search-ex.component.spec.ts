import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySearchExComponent } from './lazy-search-ex.component';

describe('LazySearchExComponent', () => {
  let component: LazySearchExComponent;
  let fixture: ComponentFixture<LazySearchExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySearchExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySearchExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
