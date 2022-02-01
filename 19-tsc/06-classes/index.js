class Animal {
  constructor(name) {
    this.name = name;
  }

  get phrase() {
    return null;
  }

  say() {
    return `${this.name} says ${this.phrase}`;
  }
}

class Dog extends Animal {
  static sound = 'wow';

  get phrase() {
    return Dog.sound;
  }
}

class Cat extends Animal {
  static sound = 'meow';

  get phrase() {
    return Cat.sound;
  }
}

class Clock {
  constructor(options = 1000) {
    this.tickTimeout = options;
    this.timer = undefined;
  }

  start(func) {
    this.timer = setInterval(func, this.tickTimeout);
  }
  stop() {
    clearInterval(this.timer);
  }
}

class Cuboid {
  constructor(l, w, h) {
    this.l = l;
    this.w = w;
    this.h = h;
  }

  get surfaceArea() {
    const s = 2 * (this.l * this.h + this.l * this.w + this.w * this.h);
    return [s, this.volume];
  }

  get volume() {
    return this.l * this.w * this.h;
  }
}

class Cube extends Cuboid {
  constructor(x) {
    super(x, x, x);
  }
}
