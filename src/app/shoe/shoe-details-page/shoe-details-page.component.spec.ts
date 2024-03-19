import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeDetailsPageComponent } from './shoe-details-page.component';

describe('ShoeDetailsPageComponent', () => {
  let component: ShoeDetailsPageComponent;
  let fixture: ComponentFixture<ShoeDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ShoeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
