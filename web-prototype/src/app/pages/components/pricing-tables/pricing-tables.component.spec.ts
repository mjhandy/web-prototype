import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTablesComponent } from './pricing-tables.component';

describe('PricingTablesComponent', () => {
  let component: PricingTablesComponent;
  let fixture: ComponentFixture<PricingTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
