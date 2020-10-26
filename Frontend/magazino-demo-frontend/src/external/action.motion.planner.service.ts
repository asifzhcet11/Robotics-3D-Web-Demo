import {BaseAction} from "./base-action";
import * as ROSLIB from "roslib";
import {ActionType} from "./action.type";
import {Injectable} from "@angular/core";
import {RosConnectionService} from "./ros.connection.service";

@Injectable()
export class ActionMotionPlannerService {
  private _actions: BaseAction[] = [];

  constructor(private rosConnectionService: RosConnectionService){}

  get actions(): BaseAction[]{
    return this._actions;
  }

  set actions(value: BaseAction[]){
    this._actions = value;
  }

  addAction(action: BaseAction){
    this._actions.push(action);
  }

  removeAction(index: number){
    this._actions.splice(index,1);
  }

  plan(message: ROSLIB.Message, actionType: ActionType): boolean{
    console.log(this.rosConnectionService);
    const service = this.rosConnectionService.getRosService(actionType);
    console.log(service);
    if (service === undefined){
      return false;
    }else {
      const req = new ROSLIB.ServiceRequest({
        message: message
      });
      service.callService(req, (response) => {
        return response !== 0;
      });
    }
  }
}
