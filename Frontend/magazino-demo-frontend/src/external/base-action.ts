// defining enum for response from backend

export enum Response {
  SUCCESS,
  FAILURE
}

/*
* Base class to be used for the actions for e.g. MoveTo, Gripper
*/

export class BaseAction {

  private _name: string;
  private _values: number[];
  private _response: Response;

  constructor(name: string, values: number[]){
    this.name = name;
    this.values = values;
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

  get response(): Response{
    return this._response;
  }

  set response(value: Response){
    this._response = value;
  }
}
