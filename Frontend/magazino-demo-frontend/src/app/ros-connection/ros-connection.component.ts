import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {RosConnectionService} from "../../external/ros.connection.service.t";
import * as ROSLIB from "roslib";

@Component({
  selector: 'app-ros-connection',
  templateUrl: './ros-connection.component.html',
  styleUrls: ['./ros-connection.component.css']
})
export class RosConnectionComponent implements OnInit {

  isConnected: boolean = false;

  constructor(private rosConnectionService: RosConnectionService) { }

  ngOnInit(): void {
  }

  onConnect(form: NgForm): void{
      const addressPort = form.value['rosAddress'];
      this.rosConnectionService.rosInstance = new ROSLIB.Ros({
        url: 'ws://' + addressPort
      });

      // on connection information
      this.rosConnectionService.rosInstance.on('connection', () => {
        console.log('Connected to websocket server.');
        this.isConnected = true;
      });

      // on error information
      this.rosConnectionService.rosInstance.on('error', (error) => {
        console.log('Error connecting to websocket server: ', error);
        this.isConnected = false;
      });
      // on close connection
      this.rosConnectionService.rosInstance.on('close', () => {
        console.log('Disconnected to websocket server.');
        this.isConnected = false;
      });

      // creating the tfClient to get the frames
      this.rosConnectionService.tfClient = new ROSLIB.TFClient({
        ros: this.rosConnectionService.rosInstance,
        angularThres : 0.01,
        transThres : 0.01,
        rate : 30.0
      });
  }
}
