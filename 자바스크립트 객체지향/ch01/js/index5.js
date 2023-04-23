class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  run() {
    console.log(`Runs at ${this.speed}`);
  }
}

const car1 = new Car('blue', '100km/h');

car1.run();