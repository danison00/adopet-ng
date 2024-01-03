import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsInterestPageComponent } from './my-pets-interest-page.component';

describe('MyPetsInterestPageComponent', () => {
  let component: MyPetsInterestPageComponent;
  let fixture: ComponentFixture<MyPetsInterestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPetsInterestPageComponent]
    });
    fixture = TestBed.createComponent(MyPetsInterestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
