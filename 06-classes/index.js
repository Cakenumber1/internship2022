class Animal {
  constructor (name) {
    this.name = name
  }

  get phrase () {
    return null
  }

  say () {
    return `${this.name} + says + ${this.phrase}`
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name)
    this.sound = 'wow'
  }

  get phrase () {
    return this.sound
  }
}

class Cat extends Animal {
  constructor (name) {
    super(name)
    this.sound = 'meow'
  }

  get phrase () {
    return this.sound
  }
}

class Clock {
  constructor (options = 1000) {
    this.tickTimeout = options
  }

  start () {
    setInterval(() => {
      console.log('Вызов функции')
    }, this.tickTimeout)
  }
}

class Cuboid {
  constructor (l, w, h) {
    this.l = l
    this.w = w
    this.h = h
  }

  get surfaceArea () {
    return [2 * (this.l * this.h + this.l * this.w + this.w * this.h), this.volume]
  }

  get volume () {
    return this.l * this.w * this.h
  }
}

// S = V = x^3
class Cube extends Cuboid {
  constructor (x) {
    super(x, x, x)
  }
}
