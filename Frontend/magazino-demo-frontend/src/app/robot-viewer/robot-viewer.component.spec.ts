import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotViewerComponent } from './robot-viewer.component';

describe('RobotViewerComponent', () => {
  let component: RobotViewerComponent;
  let fixture: ComponentFixture<RobotViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
