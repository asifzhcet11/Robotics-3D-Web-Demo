import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMoveToComponent } from './action-move-to.component';

describe('ActionMoveToComponent', () => {
  let component: ActionMoveToComponent;
  let fixture: ComponentFixture<ActionMoveToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMoveToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMoveToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
