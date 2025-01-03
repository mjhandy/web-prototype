import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFeedComponent } from './api-feed.component';

describe('ApiFeedComponent', () => {
  let component: ApiFeedComponent;
  let fixture: ComponentFixture<ApiFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
