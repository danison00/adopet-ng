import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutletComponent } from './home-outlet.component';

describe('HomeOutletComponent', () => {
  let component: HomeOutletComponent;
  let fixture: ComponentFixture<HomeOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOutletComponent]
    });
    fixture = TestBed.createComponent(HomeOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
