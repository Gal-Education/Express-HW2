import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFavoritesOfMonthByCategoryComponent } from './get-favorites-of-month-by-category.component';

describe('GetFavoritesOfMonthByCategoryComponent', () => {
  let component: GetFavoritesOfMonthByCategoryComponent;
  let fixture: ComponentFixture<GetFavoritesOfMonthByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFavoritesOfMonthByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFavoritesOfMonthByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
