import * as ROSLIB from "roslib";

export class RosConnectionService {

  private _rosInstance: ROSLIB.Ros;
  private _tfClient: ROSLIB.TFClient;

  get rosInstance(): ROSLIB.Ros{
    return this._rosInstance;
  }

  set rosInstance(value: ROSLIB.Ros){
    this._rosInstance = value;
  }

  get tfClient(): ROSLIB.TFClient{
    return this._tfClient;
  }

  set tfClient(value: ROSLIB.TFClient){
    this._tfClient = value;
  }

}
