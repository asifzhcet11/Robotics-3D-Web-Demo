import {Component, Input, OnInit} from '@angular/core';
import {BaseAction} from "../../external/base-action";
import {ActionMotionPlannerService} from "../../external/action.motion.planner.service";
import * as ROSLIB from "roslib";
import {RosConnectionService} from "../../external/ros.connection.service";


@Component({
  selector: 'app-display-action',
  templateUrl: './display-action.component.html',
  styleUrls: ['./display-action.component.css']
})
export class DisplayActionComponent implements OnInit {

  @Input() action: BaseAction;
  @Input() id: number;
  isPlanSuccess: boolean;

  constructor(private rosConnectionService: RosConnectionService,
              private actionMotionPlannerService: ActionMotionPlannerService) { }

  ngOnInit(): void {
  }

  onRemove() {
    this.actionMotionPlannerService.removeAction(this.id);
  }

  plan(){
    this.isPlanSuccess = false;
    const service = this.rosConnectionService.getRosService(this.action.type);
    if (service === undefined){
      this.isPlanSuccess = false;
    }
    else {
      const req = new ROSLIB.ServiceRequest({
        message: this.action.convertToRosMessage()
      });
      service.callService(req, (response) => {
        this.isPlanSuccess = (response.result !== 0);
        console.log(this.isPlanSuccess);
      });
    }

  }
}

