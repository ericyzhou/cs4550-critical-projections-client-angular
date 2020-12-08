import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMediaComponent } from './review-media.component';

describe('ReviewMediaComponent', () => {
  let component: ReviewMediaComponent;
  let fixture: ComponentFixture<ReviewMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
