class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  collides(otherBody) {
    if(otherBody instanceof RoundBody) {
      return this.collidesRound(otherBody);
    } else if(otherBody instanceof RectBody) {
      return this.collidesRect(otherBody);
    } else if(otherBody instanceof CompoundBody) {
      return this.collidesCompound(otherBody);
    }
  }

  collidesCompound(otherBody) {
    for(let body of otherBody.bodies) {
      if(this.collides(body)) {
        return true;
      }
    }
    return false;
  }

  // abstract
  collidesRound() {
    throw new Error('Method should be implemented by subclass');
  }

  // abstract
  collidesRect() {
    throw new Error('Method should be implemented by subclass');
  }
}
