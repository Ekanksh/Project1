import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContractorDetailsComponent } from './sub-contractor-details.component';

describe('SubContractorDetailsComponent', () => {
  let component: SubContractorDetailsComponent;
  let fixture: ComponentFixture<SubContractorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubContractorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContractorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
