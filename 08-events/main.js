const ans = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, null]]
const matrix = generateMatrix([8, 11, 7, 12, 3, 15, 6, 10, 2, 5, 13, 14, 9, 1, 4, null])
const table = document.getElementById('table')
const tableInner = table.children[0].children
let emptyPlace

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
    if (e.target.innerText !== '') {
      e.target.classList.add('shake')
      setTimeout(() => {
        e.target.classList.remove('shake')
      }, 200)
    }
  }
  if (param) {
    moveElement(e.target, empty, param)
    swapInMatrix(targetPlace)
    setTimeout(() => {
      swapInWindow(e.target, empty)
    }, 10)
    setTimeout(() => {
      if (checkSolved()) alertWin()
    }, 300)
  }
})

function moveElement (targetElem, emptyElem, param) {
  targetElem.style.transform = param
}

function swapInMatrix (targetPlace) {
  const temp = matrix[targetPlace[0]][targetPlace[1]]
  matrix[targetPlace[0]][targetPlace[1]] = null
  matrix[emptyPlace[0]][emptyPlace[1]] = temp
  emptyPlace = [targetPlace[0], targetPlace[1]]
}

function swapInWindow (targetElem, emptyElem) {
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
  // TODO: esli budet vrem9 write smth beautiful
  alert('You win')
}

function solve () {
  // TODO: esli budet vrem9 write algo that solves task
}

function checkUnsolvable (matrix) {
  let sum = 4
  const temp = matrix[0].concat(matrix[1]).concat(matrix[2]).concat(matrix[3])
  for (let i = temp.length - 1; i >= 0; i--) {
    for (let rev = i; rev < temp.length - 1; rev++) {
      if (temp[i] > temp[rev]) {
        sum++
      }
    }
  }
  return sum & 1
}

function generateMatrix (matrix) {
  const array = matrix
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  const ans = []
  for (let i = 0; i < 4; i++) {
    ans.push(array.slice(i * 4, (i + 1) * 4))
  }
  while (checkUnsolvable(ans)) rotateMatrix(ans)
  return ans
}

function rotateMatrix (matrix) {
  const l = matrix[0].length
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      const temp = matrix[j][i]
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = temp
    }
  }
  for (let i = 0; i < l; i++) {
    for (let j = 0, k = l - 1; j < k; j++, k--) {
      const temp = matrix[j][i]
      matrix[j][i] = matrix[k][i]
      matrix[k][i] = temp
    }
  }
}

function drawMatrix () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const elem = document.createElement('td')
      elem.classList.add('p-3')
      if (!matrix[i][j]) {
        elem.classList.add('table-active')
        emptyPlace = [i, j]
      } else {
        elem.innerText = matrix[i][j]
      }
      tableInner[i].appendChild(elem)
    }
  }
}
