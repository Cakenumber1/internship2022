class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get phrase(): null | string {
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
  tickTimeout: number;
  timer: NodeJS.Timer | undefined;

  constructor(options = 1000) {
    this.tickTimeout = options;
    this.timer = undefined;
  }

  start(func: { (): void; (): void; }) {
    this.timer = setInterval(func, this.tickTimeout);
  }

  stop() {
    clearInterval(<NodeJS.Timeout> this.timer);
  }
}

class Cuboid {
  l: number;
  w: number;
  h: number;

  constructor(l: number, w: number, h: number) {
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
  constructor(x: number) {
    super(x, x, x);
  }
}

const dog = new Dog('DogName');
console.log(dog.say());
const cat = new Cat('CatName');
console.log(cat.say());

const clock = new Clock();
clock.start(() => {
  console.log(new Date().getSeconds());
});
setTimeout(() => {
  clock.stop();
}, 3000);

const k = new Cuboid(3, 5, 6);
console.log(k.surfaceArea);
const k2 = new Cube(4);
console.log(k2.surfaceArea);
