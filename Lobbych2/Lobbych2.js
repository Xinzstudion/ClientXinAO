/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  ,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lobbych2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wal2 (1)", "./Lobbych2/costumes/Wal2 (1).png", {
        x: 142.5,
        y: 180.5
      }),
      new Costume("Wal-1", "./Lobbych2/costumes/Wal-1.png", {
        x: 142.5,
        y: 180.5
      })
    ];

    this.sounds = [new Sound("pop", "./Lobbych2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HousePresent" },
        this.whenIReceiveHousepresent
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHousepresent() {
    this.costume = "Wal1";
    this.effects.clear();
    this.visible = true;
    this.size = 48.7;
    this.goto(-596, 90);
    yield* this.glide(0.301, -158, 90);
    this.costume = "Wal2";
  }

  *whenIReceiveStartgame() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
