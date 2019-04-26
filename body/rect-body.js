class RectBody extends Body {
  constructor(x, y, w, h) {
    super(x, y);
    this.width = w;
    this.height = h;
  }


  // override
  collidesRound(otherBody) {
    const {x, y} = this.pos;
    const oX = otherBody.pos.x;
    const oY = otherBody.pos.y;
    const collidesX = x < oX ? (x - oX < otherBody.radius + this.width) : (oX - x < otherBody.radius);
    const collidesY = y < oY ? (y - oY < otherBody.radius + this.height) : (oY - y < otherBody.radius);
    return collidesX && collidesY;
  }

  // override
  collidesRect(otherBody) {

  }
}
