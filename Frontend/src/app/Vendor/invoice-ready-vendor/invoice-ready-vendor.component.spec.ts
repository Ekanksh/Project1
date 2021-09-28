import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReadyVendorComponent } from './invoice-ready-vendor.component';

describe('InvoiceReadyVendorComponent', () => {
  let component: InvoiceReadyVendorComponent;
  let fixture: ComponentFixture<InvoiceReadyVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceReadyVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReadyVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
