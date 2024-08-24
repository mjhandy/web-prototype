import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxNavComponent } from './aux-nav.component';

describe('AuxNavComponent', () => {
  let component: AuxNavComponent;
  let fixture: ComponentFixture<AuxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
