import {Component, Input, OnInit} from '@angular/core';
import {BaseAction} from "../../external/base-action";
import {ActionMotionPlannerService} from "../../external/action.motion.planner.service";

@Component({
  selector: 'app-display-action',
  templateUrl: './display-action.component.html',
  styleUrls: ['./display-action.component.css']
})
export class DisplayActionComponent implements OnInit {

  @Input() action: BaseAction;
  @Input() id: number;

  constructor(private actionMotionPlannerService: ActionMotionPlannerService) { }

  ngOnInit(): void {
  }

  onRemove() {
    this.actionMotionPlannerService.removeAction(this.id);
  }

  plan(){
    console.log('planning');
    this.actionMotionPlannerService.plan(this.action.convertToRosMessage(), this.action.type);
  }
}

