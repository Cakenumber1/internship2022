const ans = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, null]]
const matrix = [[8, 11, 7, 12], [3, 15, 6, 10], [2, 5, 13, 14], [9, 1, 4, null]]
const table = document.getElementById('table')
const tableInner = table.children[0].children
let emptyPlace = [3, 3]

table.addEventListener('click', (e) => {
  const targetPlace = [e.target.parentElement.rowIndex, e.target.cellIndex]
  const empty = tableInner[emptyPlace[0]].children[emptyPlace[1]]
  const diffY = targetPlace[0] - emptyPlace[0]
  const diffX = targetPlace[1] - emptyPlace[1]
  let param
  if ((Math.abs(diffX) === 1) && (diffY === 0)) {
    param = `translateX(${-diffX * 57}px)`
  } else if ((Math.abs(diffY) === 1) && (diffX === 0)) {
    param = `translateY(${-diffY * 57}px)`
  } else {
    e.target.classList.add('shake')
    setTimeout(() => { e.target.classList.remove('shake') }, 200)
  }
  if (param) {
    move(e.target, empty, param)
    swap(targetPlace)
    setTimeout(() => { drawTable(e.target, empty) }, 10)
    setTimeout(() => { if (checkSolved()) alertWin() }, 300)
  }
})

function move (targetElem, emptyElem, param) {
  targetElem.style.transform = param
}

function swap (targetPlace) {
  const temp = matrix[targetPlace[0]][targetPlace[1]]
  matrix[targetPlace[0]][targetPlace[1]] = null
  matrix[emptyPlace[0]][emptyPlace[1]] = temp
  emptyPlace = [targetPlace[0], targetPlace[1]]
}

function drawTable (targetElem, emptyElem) {
  const temp = targetElem.innerText
  targetElem.innerText = ''
  targetElem.style.transform = ''
  emptyElem.classList.remove('table-active')
  targetElem.classList.add('table-active')
  emptyElem.innerText = temp
}

function checkSolved () {
  return JSON.stringify(matrix) === JSON.stringify(ans)
}

function alertWin () {
  // TODO: smth
  alert('You win')
}

function checkSolvable () {
  let sum = 4
  const temp = matrix[0].concat(matrix[1]).concat(matrix[2]).concat(matrix[3])
  for (let i = temp.length - 1; i >= 0; i--) {
    for (let rev = i; rev < temp.length - 1; rev++) {
      if (temp[i] > temp[rev]) {
        sum++
      }
    }
  }
  return sum
}
