import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCardComponent } from './shoe-card.component';

describe('ShoeCardComponent', () => {
  let component: ShoeCardComponent;
  let fixture: ComponentFixture<ShoeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeCardComponent]
    });
    fixture = TestBed.createComponent(ShoeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
