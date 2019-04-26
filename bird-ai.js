class BirdAI {
  constructor(behavior) {
    this.behavior = behavior;
  }

  shouldFlap(world) {
    return this.behavior(world);
  }
}
