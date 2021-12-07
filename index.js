function sumOdd(last) {
    if (!(last & 1)) {
        last -= 1;
    }
    return Math.pow(((1 + last) / 2), 2);
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
function getFirstAndLast(arr) {
    arr.splice(1, arr.length - 2);
    return arr;
}
function fillArray(arr) {
    return arr.fill(arr.length);
}
function fillArrayAlt(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString().length;
    }
    return arr;
}
function fillArrayMap(arr) {
    return arr.map(function (x) { return x.toString().length; });
}
