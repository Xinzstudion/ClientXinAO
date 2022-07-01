import { BLUEXIN } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Lobbych1 from "./Lobbych1/Lobbych1.js";
import Lobbych2 from "./Lobbych2/Lobbych2.js";
import Xinvonlobby from "./Xinvonlobby/Xinvonlobby.js";
import Gameid from "./Gameid/Gameid.js";

Xinvonlobby: new Xinvonlobby({
  x: 0,
  y: 117,
  direction: 90,
  costumeNumber: 1,
  size: 63.02999999999987,
  visible: false
}),
  Lobbych1;new Lobbych1({
  x: 158,
  y: 90,
  direction: 90,
  costumeNumber: 2,
  size: 48.7,
  visible: false
}),
  Lobbych2;new Lobbych2({
  x: -158,
  y: 90,
  direction: 90,
  costumeNumber: 1,
  size: 48.7,
  visible: false
});
Gameid: new Gameid({
  x: 0,
  y: 0,
  direction: 90,
  costumeNumber: 1,
  size: 101.1,
  visible: false
}),
{},
