import { Component, OnInit } from '@angular/core';
import {BaseAction} from "../../external/base-action";
import {ActionMotionPlannerService} from "../../external/action.motion.planner.service";

@Component({
  selector: 'app-action-planner',
  templateUrl: './action-planner.component.html',
  styleUrls: ['./action-planner.component.css']
})
export class ActionPlannerComponent implements OnInit {

  actions: BaseAction[];

  constructor(private actionMotionPlannerService: ActionMotionPlannerService) { }

  ngOnInit(): void {
    this.actions = this.actionMotionPlannerService.actions;
  }


}
