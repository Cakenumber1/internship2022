function sumOdd(last) {
    return Math.pow(((1 + last) / 2), 2);
}
function reverse(str) {
    return str.split('').reverse().join('');
}
function compare(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
function split(arr) {
    var ans;
    (arr.length > 2) ? ans = [arr[0], arr[arr.length - 1]] : ans = arr;
    return ans;
}
function fillArray(arr) {
    return arr.fill(arr.length);
}