const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/'

class PromisedXHR {
  send (method, url) {
    return new Promise((resolve, reject) => {
      xhr.open(method, url, true)
      xhr.responseType = 'json'
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(this.response)
        }
      }
      xhr.send()
    })
  }
}

function sendRequestPromise () {
  const inputText = document.getElementById('input').value
  const temp = new PromisedXHR()
  temp.send('GET', url + 'posts/' + inputText)
    .then(r => {
      const temp2 = new PromisedXHR()
      temp2.send('GET', url + 'users/' + r.userId).then(console.log)
    })
}

function sendRequestFetch () {
  const inputText = document.getElementById('input').value
  fetch(url + 'posts/' + inputText).then(r => {
    if (r.status === 200) {
      r.json()
        .then(inner => {
          fetch(url + 'users/' + inner.userId)
            .then(r2 => {
              r2.json().then(console.log)
            })
        })
    }
  })
}

function sendRequestAxios () {
  const inputText = document.getElementById('input').value
  axios.get(url + 'posts/' + inputText)
    .then(r => {
      axios.get(url + 'users/' + r.data.userId)
        .then(r2 => console.log(r2.data))
    })
}
