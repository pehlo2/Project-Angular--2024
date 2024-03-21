import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarShoeComponent } from './search-bar-shoe.component';

describe('SearchBarShoeComponent', () => {
  let component: SearchBarShoeComponent;
  let fixture: ComponentFixture<SearchBarShoeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarShoeComponent]
    });
    fixture = TestBed.createComponent(SearchBarShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
