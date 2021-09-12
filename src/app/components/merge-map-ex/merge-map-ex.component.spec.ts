import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapExComponent } from './merge-map-ex.component';

describe('FlatMapExComponent', () => {
  let component: MergeMapExComponent;
  let fixture: ComponentFixture<MergeMapExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
