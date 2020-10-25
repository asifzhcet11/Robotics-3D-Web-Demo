import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ROS3D from 'ros3d'
import {RosConnectionService} from "../../external/ros.connection.service.t";

@Component({
  selector: 'app-robot-viewer',
  templateUrl: './robot-viewer.component.html',
  styleUrls: ['./robot-viewer.component.css']
})
export class RobotViewerComponent implements OnInit, AfterViewInit {
  @ViewChild('robotViewer') robotViewerDiv: ElementRef;
  constructor(private rosConnectionService: RosConnectionService) { }

  ngOnInit(): void {

    this.rosConnectionService.robotViewer = new ROS3D.Viewer({
      divID: 'robot-viewer',
      width: 200,
      height: 200,
      antialias: true,
      background: '#ffffff'
    });

    this.rosConnectionService.robotViewer.addObject(new ROS3D.Grid({
      color: '#bebebe',
      cellSize: 0.1,
      num_cells: 25
    }));
  }

  private _resizeViewer(): void{
    this.rosConnectionService.robotViewer.resize(this.robotViewerDiv.nativeElement.clientWidth,
      this.robotViewerDiv.nativeElement.clientHeight);
  }

  onResize(event: Event): void{
    this._resizeViewer();
  }

  ngAfterViewInit(): void {
    this._resizeViewer();
  }
}
