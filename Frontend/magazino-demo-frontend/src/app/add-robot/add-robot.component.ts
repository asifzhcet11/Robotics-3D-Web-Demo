import { Component, OnInit } from '@angular/core';
import {RosConnectionService} from "../../external/ros.connection.service";
import * as ROS3D from "ros3D";

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.css']
})
export class AddRobotComponent implements OnInit {

  robots = ["panda", "kuka"];
  selectedRobot = '';

  constructor(private rosConnectionService: RosConnectionService) { }

  ngOnInit(): void {
  }

  addRobot(){
    const urdfClient = new ROS3D.UrdfClient({
      ros: this.rosConnectionService.rosInstance,
      tfClient: this.rosConnectionService.tfClient,
      path : 'http://192.168.2.102:9090/',
      rootObject : this.rosConnectionService.robotViewer.scene,
    });
  }
}
