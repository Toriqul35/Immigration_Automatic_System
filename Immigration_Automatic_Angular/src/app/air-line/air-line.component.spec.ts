import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLineComponent } from './air-line.component';

describe('AirLineComponent', () => {
  let component: AirLineComponent;
  let fixture: ComponentFixture<AirLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
