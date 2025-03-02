import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipDirectorsComponent } from './leadership-directors.component';

describe('LeadershipDirectorsComponent', () => {
  let component: LeadershipDirectorsComponent;
  let fixture: ComponentFixture<LeadershipDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipDirectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
