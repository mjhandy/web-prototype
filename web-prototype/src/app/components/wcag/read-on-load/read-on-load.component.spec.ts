import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnLoadComponent } from './read-on-load.component';

describe('ReadOnLoadComponent', () => {
  let component: ReadOnLoadComponent;
  let fixture: ComponentFixture<ReadOnLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadOnLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
