import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFavoritesOfUserComponent } from './get-favorites-of-user.component';

describe('GetFavoritesOfUserComponent', () => {
  let component: GetFavoritesOfUserComponent;
  let fixture: ComponentFixture<GetFavoritesOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFavoritesOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFavoritesOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
