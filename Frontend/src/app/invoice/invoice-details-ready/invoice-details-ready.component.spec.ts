import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsReadyComponent } from './invoice-details-ready.component';

describe('InvoiceDetailsReadyComponent', () => {
  let component: InvoiceDetailsReadyComponent;
  let fixture: ComponentFixture<InvoiceDetailsReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
