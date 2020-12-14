import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReviewsSectionComponent } from './profile-reviews-section.component';

describe('ProfileReviewsSectionComponent', () => {
  let component: ProfileReviewsSectionComponent;
  let fixture: ComponentFixture<ProfileReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReviewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
