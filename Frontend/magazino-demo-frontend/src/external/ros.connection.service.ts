import * as ROSLIB from 'roslib';
import * as ROS3D from 'ros3d'

export class RosConnectionService {

  private _rosInstance: ROSLIB.Ros;
  private _tfClient: ROSLIB.TFClient;
  private _robotViewer: ROS3D.Viewer;
  private _isConnected: boolean;

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

  get robotViewer(): ROS3D.Viewer{
    return this._robotViewer;
  }

  set robotViewer(value: ROS3D.Viewer){
    this._robotViewer = value;
  }

  get isConnected(): boolean{
    return this.isConnected;
  }

  set isConnected(value: boolean){
    this._isConnected = value;
  }

}
