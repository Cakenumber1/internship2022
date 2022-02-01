function sequence(start = 0, steps = 1) {
  let place = start;
  return function() {
    place += steps;
    return place;
  };
}

const firstTest = sequence();
const firstTest2 = sequence(3, 6);
// Argument of type 'string' is not assignable to parameter of type 'number'
// const firstTestError = sequence('a', 'b');
console.log(firstTest()); // 1
console.log(firstTest()); // 2
console.log(firstTest2()); // 9
console.log(firstTest2()); // 15

function container() {
  const content: string[] = [];
  return (...args : string[]) => {
    if (args.length === 0) {
      return content;
    } else {
      content.push(...args);
    }
  };
}

const thirdTest = container();
// Expected 0 arguments, but got 1.
// const thirdTestError = container('asd');
thirdTest('asfdada');
thirdTest('avcxx');
thirdTest('123');
console.log(thirdTest()); // [ 'asfdada', 'avcxx', '123' ]
