import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsToAdoptionPageComponent } from './my-pets-to-adoption-page.component';

describe('MyPetsToAdoptionPageComponent', () => {
  let component: MyPetsToAdoptionPageComponent;
  let fixture: ComponentFixture<MyPetsToAdoptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPetsToAdoptionPageComponent]
    });
    fixture = TestBed.createComponent(MyPetsToAdoptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
