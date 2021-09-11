import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapExComponent } from './concat-map-ex.component';

describe('ConcatMapExComponent', () => {
  let component: ConcatMapExComponent;
  let fixture: ComponentFixture<ConcatMapExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMapExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
