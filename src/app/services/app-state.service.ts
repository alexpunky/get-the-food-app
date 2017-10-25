import { Injectable } from '@angular/core';
import {State} from '../models/state';

@Injectable()
export class AppStateService {

  private state: State;

  constructor() { }

}
