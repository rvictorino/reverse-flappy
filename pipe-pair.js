class PipePair extends CompoundBody {
  constructor(x, y, gapY) {
    super(x, y, []);
    this.topPipe = new Pipe(x, y, WORLD_CONSTANTS.PIPE_WIDTH, gapY);
    this.bottomPipe = new Pipe(x, gapY + WORLD_CONSTANTS.GAP_SIZE, WORLD_CONSTANTS.PIPE_WIDTH, height);
    this.addBody(this.topPipe);
    this.addBody(this.bottomPipe);
  }

  scroll(speed) {
    this.pos.add(speed, 0);
    this.topPipe.pos.add(speed, 0);
    this.bottomPipe.pos.add(speed, 0);
  }

  update() {
    this.scroll(-1);
  }

  show() {
    push();
    this.topPipe.show();
    this.bottomPipe.show();
    pop();
  }
}
