class Bird extends RoundBody {
  constructor() {
    super(width * 0.2, height / 2, WORLD_CONSTANTS.BIRD_SIZE);
    this.velocity = createVector(0, 0);
  }

  applyForce(force) {
    this.velocity.add(force);
    this.pos.add(this.velocity);
  }

  flap() {
    this.applyForce(WORLD_CONSTANTS.BIRD_FLAP);
  }

  update() {
    this.applyForce(WORLD_CONSTANTS.GRAVITY);
  }

  show() {
    const {x, y} = this.pos;
    push();
    image(sprites.bird, x - WORLD_CONSTANTS.BIRD_SIZE, y - WORLD_CONSTANTS.BIRD_SIZE * 2, WORLD_CONSTANTS.BIRD_SIZE * 2, WORLD_CONSTANTS.BIRD_SIZE * 2)
    pop();
  }
}
