import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolUserComponent } from './enrol-user.component';

describe('EnrolUserComponent', () => {
  let component: EnrolUserComponent;
  let fixture: ComponentFixture<EnrolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
