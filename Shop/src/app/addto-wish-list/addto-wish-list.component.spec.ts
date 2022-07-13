import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoWishListComponent } from './addto-wish-list.component';

describe('AddtoWishListComponent', () => {
  let component: AddtoWishListComponent;
  let fixture: ComponentFixture<AddtoWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoWishListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
