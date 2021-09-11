import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapExComponent } from './switch-map-ex.component';

describe('SwitchMapExComponent', () => {
  let component: SwitchMapExComponent;
  let fixture: ComponentFixture<SwitchMapExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
