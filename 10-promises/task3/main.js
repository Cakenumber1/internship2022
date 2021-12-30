const url = 'https://api.github.com/users/'
const textbox = document.getElementById('input')

function debounce(func, wait) {
  let timeout
  return function innerFunction() {
    const later = function() {
      timeout = null
      func.apply(this, arguments)
    }
    const callNow = !timeout && false
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, arguments)
  }
}

class PromisedXHR {
  xhr = new XMLHttpRequest()
  send (method, url) {
    return new Promise((resolve, reject) => {
      this.xhr.open(method, url, true)
      this.xhr.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.response))
        } else {
          reject(this.response)
        }
      }
      this.xhr.send()
    })
  }

  cancel () {
    this.xhr.abort()
  }
}
let temp = new PromisedXHR()

function sendRequestPromise () {
  temp = new PromisedXHR()
  const inputText = document.getElementById('input').value
  temp.send('GET', url + inputText)
    .then(console.log)
}
const func1 = debounce(function() {
  temp.cancel()
  sendRequestPromise()
}, 300, false);

textbox.addEventListener('keyup', func1)

