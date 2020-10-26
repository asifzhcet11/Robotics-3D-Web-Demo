import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BaseAction} from "../../external/base-action";
import {ActionMotionPlannerService} from "../../external/action.motion.planner.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {DisplayActionComponent} from "../display-action/display-action.component";

@Component({
  selector: 'app-action-planner',
  templateUrl: './action-planner.component.html',
  styleUrls: ['./action-planner.component.css']
})
export class ActionPlannerComponent implements OnInit {

  @ViewChildren(DisplayActionComponent) private _actionComponents: QueryList<DisplayActionComponent>;
  actions: BaseAction[];

  constructor(private actionMotionPlannerService: ActionMotionPlannerService) { }

  ngOnInit(): void {
    this.actions = this.actionMotionPlannerService.actions;
  }

  drop(event: CdkDragDrop<BaseAction[]>) {
    moveItemInArray(this.actions, event.previousIndex, event.currentIndex);
  }
  
  planGroup(){
    for(let component of this._actionComponents.toArray()){
      component.plan();
    }
  }
}
