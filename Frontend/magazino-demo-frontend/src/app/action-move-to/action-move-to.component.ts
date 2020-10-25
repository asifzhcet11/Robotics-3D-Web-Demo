import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MoveToAction} from "./move-to-action";


@Component({
  selector: 'app-action-move-to',
  templateUrl: './action-move-to.component.html',
  styleUrls: ['./action-move-to.component.css']
})
export class ActionMoveToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let pose = form.value['pose'];

    // converting string to number array
    pose = pose.match(/\d+(?:\.\d+)?/g).map(Number);

    // creating a move to action
    const moveToAction = new MoveToAction('Move To', pose);

    console.log(moveToAction.convertToRosMessage());
  }

}
