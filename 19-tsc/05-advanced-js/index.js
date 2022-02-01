function sequence(start = 0, steps = 1) {
  let place = start;
  return function() {
    place += steps;
    return place;
  };
}

const firstTest = sequence();
const firstTest2 = sequence(3, 6);
console.log(firstTest()); // 1
console.log(firstTest()); // 2
console.log(firstTest2()); // 9
console.log(firstTest2()); // 15

// Function.prototype is read only, properties should not be added
// sum.myBind = function ... тоже работает

Function.prototype.myBind = function(context, ...args) {
  return (...args2) => {
    return this.apply(context, args.concat(args2));
  };
};

function sum(...args) {
  let ans = this.a + this.b || 0;
  for (let i = 0; i < args.length; i++) {
    ans += args[i];
  }
  return ans;
}

console.log(sum(null, 10, 20)); // 30
console.log(sum.myBind({a: 3, b: 6}, 10, 20)()); // 39

function container() {
  const content = [];
  return (...args) => {
    if (args.length === 0) {
      return content;
    } else {
      content.push(...args);
    }
  };
}

const thirdTest = container();
thirdTest('asfdada');
thirdTest('avcxx');
thirdTest('123');
console.log(thirdTest()); // [ 'asfdada', 'avcxx', '123' ]
