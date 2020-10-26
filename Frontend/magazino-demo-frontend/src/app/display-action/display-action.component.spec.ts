import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayActionComponent } from './display-action.component';

describe('DisplayActionComponent', () => {
  let component: DisplayActionComponent;
  let fixture: ComponentFixture<DisplayActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
