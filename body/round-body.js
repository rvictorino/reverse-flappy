class RoundBody extends Body {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  // override
  collidesRound(otherBody) {
    const {x, y} = this.pos;
    const oX = otherBody.pos.x;
    const oY = otherBody.pos.y;
    return dist(x, y, oX, oY) < this.radius + otherBody.radius;
  }

  // override
  collidesRect(otherBody) {
    const {x, y} = this.pos;
    const oX = otherBody.pos.x;
    const oY = otherBody.pos.y;
    const collidesX = x < oX ? (oX - x < this.radius) : (x - oX < otherBody.width + this.radius);
    const collidesY = y < oY ? (oY - y < this.radius) : (y - oY < otherBody.height + this.radius);
    return collidesX && collidesY;
  }
}
