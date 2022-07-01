/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lobbych1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Veg1 (1)", "./Lobbych1/costumes/Veg1 (1).png", {
        x: 108,
        y: 180.5
      }),
      new Costume("Veg2", "./Lobbych1/costumes/Veg2.png", {
        x: 93.99999237060547,
        y: 180.5
      })
    ];

    this.sounds = [new Sound("pop", "./Lobbych1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "HousePresent" },
        this.whenIReceiveHousepresent
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      )
    ];
  }

  *whenIReceiveHousepresent() {
    this.costume = "Veg1 (1)";
    this.effects.clear();
    this.visible = true;
    this.size = 48.7;
    this.goto(596, 90);
    yield* this.glide(0.301, 158, 90);
    this.costume = "Veg2 (1)";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
