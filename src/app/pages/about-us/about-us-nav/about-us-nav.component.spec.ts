import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsNavComponent } from './about-us-nav.component';

describe('AboutUsNavComponent', () => {
  let component: AboutUsNavComponent;
  let fixture: ComponentFixture<AboutUsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
