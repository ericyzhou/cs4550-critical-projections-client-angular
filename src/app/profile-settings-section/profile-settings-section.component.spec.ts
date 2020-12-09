import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsSectionComponent } from './profile-settings-section.component';

describe('ProfileSettingsSectionComponent', () => {
  let component: ProfileSettingsSectionComponent;
  let fixture: ComponentFixture<ProfileSettingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
