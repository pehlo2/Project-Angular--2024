import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatioBarComponent } from './navigatio-bar.component';

describe('NavigatioBarComponent', () => {
  let component: NavigatioBarComponent;
  let fixture: ComponentFixture<NavigatioBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatioBarComponent]
    });
    fixture = TestBed.createComponent(NavigatioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
