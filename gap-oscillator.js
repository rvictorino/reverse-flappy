class GapOscillator {
  constructor(speed) {
    this._value = 0;
    this.speed = speed;
  }

  update() {
    this._value = (this._value + this.speed) % TWO_PI;
  }

  get value() {
    return map(cos(this._value), -1, 1, WORLD_CONSTANTS.GAP_MIN, WORLD_CONSTANTS.GAP_MAX);
  }

  show() {
    push();
    stroke(255, 0, 0);
    line(width * 0.9, this.value, width * 0.9, this.value + WORLD_CONSTANTS.GAP_SIZE);
    pop();
  }
}
