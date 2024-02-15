import { IRegion } from "./Region";

export interface IMap {
  viewBox: string;
  regions: IRegion[];
}
