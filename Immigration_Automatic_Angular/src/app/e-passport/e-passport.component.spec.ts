import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPassportComponent } from './e-passport.component';

describe('EPassportComponent', () => {
  let component: EPassportComponent;
  let fixture: ComponentFixture<EPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
