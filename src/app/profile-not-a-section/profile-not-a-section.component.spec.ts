import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNotASectionComponent } from './profile-not-a-section.component';

describe('ProfileNotASectionComponent', () => {
  let component: ProfileNotASectionComponent;
  let fixture: ComponentFixture<ProfileNotASectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNotASectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNotASectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
