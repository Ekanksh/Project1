import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailInAccrualComponent } from './invoice-detail-in-accrual.component';

describe('InvoiceDetailInAccrualComponent', () => {
  let component: InvoiceDetailInAccrualComponent;
  let fixture: ComponentFixture<InvoiceDetailInAccrualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailInAccrualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailInAccrualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
