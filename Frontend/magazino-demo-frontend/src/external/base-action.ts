import * as ROSLIB from 'roslib';
import {ActionType} from "./action.type";

// defining enum for response from backend
export enum Response {
  SUCCESS,
  FAILURE
}

/*
* Base class to be used for the actions for e.g. MoveTo, Gripper
*/

export abstract class BaseAction {

  private _name: string;
  private _values: number[];
  private _type: ActionType;

  constructor(name: string, values: number[], type: ActionType){
    this.name = name;
    this.values = values;
    this.type = type;
  }

  get name(): string{
    return this._name;
  }

  set name(value: string){
    this._name = value;
  }

  get values(): number[]{
    return this._values;
  }

  set values(value: number[]){
    this._values = value;
  }

  get type(): ActionType{
    return this._type
  }

  set type(value: ActionType){
    this._type = value;
  }

  abstract convertToRosMessage(): ROSLIB.Message;

}
