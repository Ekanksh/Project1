import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsDisputedComponent } from './invoice-details-disputed.component';

describe('InvoiceDetailsDisputedComponent', () => {
  let component: InvoiceDetailsDisputedComponent;
  let fixture: ComponentFixture<InvoiceDetailsDisputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsDisputedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsDisputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
