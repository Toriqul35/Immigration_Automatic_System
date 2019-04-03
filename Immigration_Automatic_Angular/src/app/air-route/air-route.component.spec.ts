import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRouteComponent } from './air-route.component';

describe('AirRouteComponent', () => {
  let component: AirRouteComponent;
  let fixture: ComponentFixture<AirRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
