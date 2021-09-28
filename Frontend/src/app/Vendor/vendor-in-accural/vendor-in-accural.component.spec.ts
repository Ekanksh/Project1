import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorInAccuralComponent } from './vendor-in-accural.component';

describe('VendorInAccuralComponent', () => {
  let component: VendorInAccuralComponent;
  let fixture: ComponentFixture<VendorInAccuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorInAccuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInAccuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
