import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopetComponent } from './adopet.component';

describe('AdopetComponent', () => {
  let component: AdopetComponent;
  let fixture: ComponentFixture<AdopetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopetComponent]
    });
    fixture = TestBed.createComponent(AdopetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
