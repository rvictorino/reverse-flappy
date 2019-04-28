class Scrollable {
  constructor(speed, position, img) {
    this.speed = speed;
    this.img = img;
    this.x = 0;
    this.y = position == 'top' ? 0 : height - this.img.height;
  }

  scroll() {
    this.x = (this.x + this.speed) % this.img.width;
  }

  show() {
    image(this.img, this.x, this.y);
    image(this.img, this.x + this.img.width, this.y);
  }
}