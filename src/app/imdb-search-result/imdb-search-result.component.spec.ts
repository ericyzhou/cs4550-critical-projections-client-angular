import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbSearchResultComponent } from './imdb-search-result.component';

describe('ImdbSearchResultComponent', () => {
  let component: ImdbSearchResultComponent;
  let fixture: ComponentFixture<ImdbSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
