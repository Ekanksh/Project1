import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsPaidComponent } from './invoice-details-paid.component';

describe('InvoiceDetailsPaidComponent', () => {
  let component: InvoiceDetailsPaidComponent;
  let fixture: ComponentFixture<InvoiceDetailsPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
