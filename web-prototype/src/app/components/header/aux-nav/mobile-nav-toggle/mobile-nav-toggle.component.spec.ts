import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavToggleComponent } from './mobile-nav-toggle.component';

describe('MobileNavToggleComponent', () => {
  let component: MobileNavToggleComponent;
  let fixture: ComponentFixture<MobileNavToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
