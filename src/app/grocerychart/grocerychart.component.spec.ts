import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerychartComponent } from './grocerychart.component';

describe('GrocerychartComponent', () => {
  let component: GrocerychartComponent;
  let fixture: ComponentFixture<GrocerychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocerychartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
