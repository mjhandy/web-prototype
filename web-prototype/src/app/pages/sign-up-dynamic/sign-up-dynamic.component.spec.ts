import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDynamicComponent } from './sign-up-dynamic.component';

describe('SignUpDynamicComponent', () => {
  let component: SignUpDynamicComponent;
  let fixture: ComponentFixture<SignUpDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
