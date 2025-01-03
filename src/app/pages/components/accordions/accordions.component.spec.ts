import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionsComponent } from './accordions.component';

describe('AccordiansComponent', () => {
  let component: AccordionsComponent;
  let fixture: ComponentFixture<AccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
