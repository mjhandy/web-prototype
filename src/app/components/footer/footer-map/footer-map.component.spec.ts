import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMapComponent } from './footer-map.component';

describe('FooterMapComponent', () => {
  let component: FooterMapComponent;
  let fixture: ComponentFixture<FooterMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
