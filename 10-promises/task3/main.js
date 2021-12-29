const url = 'https://api.github.com/users/'
const textbox = document.getElementById('input')

function debounce (f, ms) {
  let isCooldown = false
  return function () {
    if (isCooldown) return
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => { isCooldown = false }, ms)
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

textbox.addEventListener('keyup', function (e) {
  temp.cancel()
  if (this.value) {
    const smth = debounce(sendRequestPromise, 300)
    smth()
  }
})
