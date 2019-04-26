let world;

const WORLD_CONSTANTS = {
  GRAVITY: null,
  BIRD_FLAP: null,
  GAP_SIZE: null,
  GAP_MIN: null,
  GAP_MAX: null,
  BIRD_SIZE: 25,
  PIPE_WIDTH: 50
};

const sprites = {};

function preload() {
  sprites['bird'] = loadImage('assets/bird.png');
}

function setup() {
  createCanvas(600, 400);
  noStroke();

  world = new World();
  WORLD_CONSTANTS.GRAVITY = createVector(0, 0.5);
  WORLD_CONSTANTS.BIRD_FLAP = createVector(0, -7);
  WORLD_CONSTANTS.GAP_SIZE = height * 0.4;
  WORLD_CONSTANTS.GAP_MIN = height * 0.1;
  WORLD_CONSTANTS.GAP_MAX = height - WORLD_CONSTANTS.GAP_MIN - WORLD_CONSTANTS.GAP_SIZE;
}

function draw() {
  world.update();
  world.show();
}

function keyTyped() {
  switch(key) {
    case ' ':
      world.onAddPipe();
      break;
    default:
      break;
  }
}
