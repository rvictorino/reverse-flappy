class CompoundBody extends Body {
  constructor(x, y, bodies) {
    super(x, y);
    this.bodies = bodies;
  }

  addBody(body) {
    this.bodies.push(body);
  }

  // override
  collidesRect(otherBody) {
    for(let body of this.bodies) {
      if(body.collidesRect(otherBody)) {
        return true;
      }
    }
    return false;
  }

  // override
  collidesRound(otherBody) {
    for(let body of this.bodies) {
      if(body.collidesRound(otherBody)) {
        return true;
      }
    }
    return false;
  }
}
