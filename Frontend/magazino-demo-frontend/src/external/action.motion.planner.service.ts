import {BaseAction} from "./base-action";

export class ActionMotionPlannerService {
  private _actions: BaseAction[] = [];

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

}
