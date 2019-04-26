class World {
  constructor() {
    this.bird = new Bird();
    this.pipes = [];
    this.oscillator = new GapOscillator(0.1);
    this.birdAI = new BirdAI((world) => world.bird.pos.y > height * 0.6)
    this.collision = false;
  }

  onAddPipe() {
    this.addPipe();
  }

  addPipe() {
    this.pipes.push(new PipePair(width * 0.9, 0, this.oscillator.value));
  }

  updatePipes() {
    this.pipes = this.pipes.filter(p => p.pos.x + WORLD_CONSTANTS.PIPE_WIDTH > 0);
    this.pipes.forEach(p => p.update());
  }

  collide() {
    this.collision = false;
    for(let pipe of this.pipes) {
      if(this.bird.collides(pipe)) {
        this.collision = true;
        break;
      }
    }
  }

  flapOrNot() {
    if(this.birdAI.shouldFlap(this)) {
      this.bird.flap();
    }
  }

  update() {
    this.collide();
    this.bird.update();
    this.oscillator.update();
    this.updatePipes();
    this.flapOrNot();
  }

  show() {
    if(this.collision) {
      background(217, 30, 24);
    } else {
      background(218, 223, 225);
    }
    this.bird.show();
    this.pipes.forEach(p => p.show());
    this.oscillator.show();
  }
}
