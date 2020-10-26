import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ActionMoveToComponent } from './action-move-to/action-move-to.component';
import {FormsModule} from "@angular/forms";
import { RosConnectionComponent } from './ros-connection/ros-connection.component';
import {RosConnectionService} from "../external/ros.connection.service";
import { RobotViewerComponent } from './robot-viewer/robot-viewer.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { ActionPlannerComponent } from './action-planner/action-planner.component';
import {ActionMotionPlannerService} from "../external/action.motion.planner.service";
import { DisplayActionComponent } from './display-action/display-action.component';
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    ActionMoveToComponent,
    RosConnectionComponent,
    RobotViewerComponent,
    AddRobotComponent,
    ActionPlannerComponent,
    DisplayActionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [RosConnectionService, ActionMotionPlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
