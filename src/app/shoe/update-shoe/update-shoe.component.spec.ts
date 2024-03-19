import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShoeComponent } from './update-shoe.component';

describe('UpdateShoeComponent', () => {
  let component: UpdateShoeComponent;
  let fixture: ComponentFixture<UpdateShoeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShoeComponent]
    });
    fixture = TestBed.createComponent(UpdateShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
