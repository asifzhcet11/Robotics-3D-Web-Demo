import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { ActionMoveToComponent } from './action-move-to/action-move-to.component';
import {FormsModule} from "@angular/forms";
import { RosConnectionComponent } from './ros-connection/ros-connection.component';
import {RosConnectionService} from "../external/ros.connection.service";
import { RobotViewerComponent } from './robot-viewer/robot-viewer.component';
import { AddRobotComponent } from './add-robot/add-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionMoveToComponent,
    RosConnectionComponent,
    RobotViewerComponent,
    AddRobotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [RosConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
