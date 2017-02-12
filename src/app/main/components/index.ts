import { ResourceItem } from './resourceItem/resourceItem.component';
import { Ticker } from './ticker/ticker.component';
import { AcceptReject } from './acceptReject/acceptReject.component';

export * from './resourceItem/resourceItem.component';
export * from './ticker/ticker.component';
export * from './acceptReject/acceptReject.component';

export const ViewComponents = [
  ResourceItem,
  Ticker,
  AcceptReject
];