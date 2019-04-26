class Pipe extends RectBody {
  constructor(x, y, w, h, reversed) {
    super(x, y, w, h);
    this.reversed = reversed;
  }

  show() {
    const {x, y} = this.pos;
    push();
    fill(46, 204, 113);
    rect(x, y, this.width, this.height);
    pop();
  }
}
