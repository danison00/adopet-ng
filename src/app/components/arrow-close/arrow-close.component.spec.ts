import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowCloseComponent } from './arrow-close.component';

describe('ArrowCloseComponent', () => {
  let component: ArrowCloseComponent;
  let fixture: ComponentFixture<ArrowCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowCloseComponent]
    });
    fixture = TestBed.createComponent(ArrowCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
