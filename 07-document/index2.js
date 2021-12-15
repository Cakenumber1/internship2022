export default function normalize () {
  const temp = Array.from(document.body.getElementsByTagName('*'))
  temp.forEach(e => {
    // из-за SVGAnimatedString у которого e.className = SVGAnimatedString {animVal: "", baseVal: ""}
    const className = e.getAttribute('class')
    if (className) e.className = toCamelCase(className)
  })

  function toCamelCase (str) {
    const temp = str.split('')
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === '-') {
        temp[i + 1] = temp[i + 1].toUpperCase()
      }
    }
    return temp.join('').replaceAll('-', '')
  }
}
