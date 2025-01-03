import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightModeComponent } from './dark-light-mode.component';

describe('DarkLightModeComponent', () => {
  let component: DarkLightModeComponent;
  let fixture: ComponentFixture<DarkLightModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLightModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLightModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
