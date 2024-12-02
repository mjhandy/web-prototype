import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoridonComponent } from './accoridon.component';

describe('AccoridonComponent', () => {
  let component: AccoridonComponent;
  let fixture: ComponentFixture<AccoridonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoridonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoridonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
