import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { Materials } from '../defines';

@Injectable()
export class DefinesService {

  static commonResources = Materials;//_.filter(Materials, {level: 1});

}