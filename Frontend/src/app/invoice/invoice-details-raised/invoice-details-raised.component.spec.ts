import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsRaisedComponent } from './invoice-details-raised.component';

describe('InvoiceDetailsRaisedComponent', () => {
  let component: InvoiceDetailsRaisedComponent;
  let fixture: ComponentFixture<InvoiceDetailsRaisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsRaisedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
