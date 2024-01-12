import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const battleBus = new Enemy("BattleBus", 50, 1, 0, 0, 50);
const fnkid = new Enemy("fnkid", 50, 1, 2, 0, 300);
const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  clear();
  update();
  render();
  fps();
  window.requestAnimationFrame(gameLoop);
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};
const update = () => {
  battleBus.update();
  fnkid.update();
};
const render = () => {
  battleBus.draw(ctx);
  fnkid.draw(ctx);
};

const fps = () => {};

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};

/*
import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const battleBus = new Enemy("BattleBus", 50, 1, 3);
const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  //clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameLoop znovu
  window.requestAnimationFrame(gameLoop);
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};
const update = () => {};
const render = () => {
  battleBus.draw(ctx);
};

const fps = () => {};

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};
*/
