export default function normalize () {
  const temp = Array.from(document.body.getElementsByTagName('*'))
  temp.forEach(e => {
    const classes = e.classList
    classes.forEach(classname => {
      classes.remove(classname)
      classes.add(toCamelCase(classname))
    })
  })
}

function toCamelCase (str) {
  const temp = str.split('')
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '-') {
      temp[i + 1] = temp[i + 1].toUpperCase()
    }
  }
  return temp.join('').replaceAll('-', '')
}
