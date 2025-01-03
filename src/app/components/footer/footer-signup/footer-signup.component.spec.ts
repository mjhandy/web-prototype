import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSignupComponent } from './footer-signup.component';

describe('FooterSignupComponent', () => {
  let component: FooterSignupComponent;
  let fixture: ComponentFixture<FooterSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
