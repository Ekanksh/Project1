import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDisputedComponent } from './vendor-disputed.component';

describe('VendorDisputedComponent', () => {
  let component: VendorDisputedComponent;
  let fixture: ComponentFixture<VendorDisputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDisputedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDisputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
