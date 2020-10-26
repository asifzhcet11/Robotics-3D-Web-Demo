import {BaseAction} from "../../external/base-action";
import * as ROSLIB from "roslib";
import * as THREE from "three";
import {ActionType} from "../../external/action.type";

export class MoveToAction extends BaseAction{
  private _pose: ROSLIB.Pose;
  constructor(name: string, values: number[], type=ActionType.MoveTo){
    super(name, values, type);
    this._convertArrayToPose();
  }

  private _convertArrayToPose(){
      const position = new ROSLIB.Vector3({
        x: this.values[0],
        y: this.values[1],
        z: this.values[2]
      });
      const quaternion: ROSLIB.Quaternion = MoveToAction._eulerToQuaternion(this.values[3],
                                                                            this.values[4],
                                                                            this.values[5]);
      this._pose = new ROSLIB.Pose({
        position: position,
        orientation: quaternion
      });
  }

  private static _eulerToQuaternion(x: number, y: number, z: number, order:string = 'XYZ'): ROSLIB.Quaternion{
      const euler: THREE.Euler = new THREE.Euler(x, y, z, order);
      const quaternion: THREE.Quaternion = new THREE.Quaternion();
      quaternion.setFromEuler(euler);
      return new ROSLIB.Quaternion({
        x: quaternion.x,
        y: quaternion.y,
        z: quaternion.z,
        w: quaternion.w
      });
  }

  convertToRosMessage(): ROSLIB.Message {
    return new ROSLIB.Message({
      position: this._pose.position,
      orientation: this._pose.orientation
    });
  }

}

