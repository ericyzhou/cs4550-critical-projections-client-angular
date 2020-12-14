import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCommentsSectionComponent } from './profile-comments-section.component';

describe('ProfileCommentsSectionComponent', () => {
  let component: ProfileCommentsSectionComponent;
  let fixture: ComponentFixture<ProfileCommentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCommentsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCommentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
