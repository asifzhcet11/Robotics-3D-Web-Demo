import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionMoveToComponent } from './action-move-to/action-move-to.component';
import {FormsModule} from "@angular/forms";
import { RosConnectionComponent } from './ros-connection/ros-connection.component';
import {RosConnectionService} from "../external/ros.connection.service.t";

@NgModule({
  declarations: [
    AppComponent,
    ActionMoveToComponent,
    RosConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RosConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
