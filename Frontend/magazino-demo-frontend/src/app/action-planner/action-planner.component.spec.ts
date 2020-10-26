import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlannerComponent } from './action-planner.component';

describe('ActionPlannerComponent', () => {
  let component: ActionPlannerComponent;
  let fixture: ComponentFixture<ActionPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
