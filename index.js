class Shoe {
  color;
  size;
  constructor(color, size) {
    this.color = color;
    this.size = size;
  }
  info() {
    console.log(this.color + this.size);
  }
}


let boot = new Shoe("black", 12);
console.log(boot);
console.log(boot.info());