import Client from "./Xin/Client";
import Room from "./Xin/Room";

export interface EntityMap<T> {
  [entityId: string]: T;
}

export { Room, Client };
