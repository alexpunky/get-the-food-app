import { Injectable } from '@angular/core';
import {State} from '../models/state';

@Injectable()
export class AppStateService {

  private state: State = State.HOME;

  constructor() { }

  public changeState(state: State) {
    this.state = state;
  }

}
