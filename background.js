class Background {
  constructor() {
    this.sky = new Scrollable(-0.8, 'top', sprites.sky);
    this.sky2 = new Scrollable(-1, 'top', sprites.sky2);
    this.grass = new Scrollable(-2, 'bottom', sprites.grass);
  }
  update() {
    this.sky.scroll();
    this.sky2.scroll();
    this.grass.scroll();
  }

  show() {
    this.sky.show();
    this.sky2.show();
    this.grass.show();
  }
}