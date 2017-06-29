import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFavoritesComponent } from './get-all-favorites.component';

describe('GetAllFavoritesComponent', () => {
  let component: GetAllFavoritesComponent;
  let fixture: ComponentFixture<GetAllFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
