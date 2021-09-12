import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatMapExComponent } from './flat-map-ex.component';

describe('FlatMapExComponent', () => {
  let component: FlatMapExComponent;
  let fixture: ComponentFixture<FlatMapExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatMapExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatMapExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
