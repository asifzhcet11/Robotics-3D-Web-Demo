import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MoveToAction} from "./move-to-action";
import {ActionMotionPlannerService} from "../../external/action.motion.planner.service";
import {RosConnectionService} from "../../external/ros.connection.service";
import * as ROSLIB from "roslib";



@Component({
  selector: 'app-action-move-to',
  templateUrl: './action-move-to.component.html',
  styleUrls: ['./action-move-to.component.css']
})
export class ActionMoveToComponent implements OnInit {

  constructor(private actionMotionPlannerService: ActionMotionPlannerService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let pose = form.value['pose'];

    // converting string to number array
    pose = pose.match(/\d+(?:\.\d+)?/g).map(Number);

    // creating a move to action
    const moveToAction = new MoveToAction('Move To', pose);
    this.actionMotionPlannerService.addAction(moveToAction);
  }
}
