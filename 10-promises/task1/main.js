const xhr = new XMLHttpRequest()
const avatar = document.getElementById('avatar')
const url = 'https://api.github.com/users/'

class PromisedXHR {
  send (method, url) {
    return new Promise((resolve, reject) => {
      xhr.open(method, url, true)
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.response))
        } else {
          reject(this.response)
        }
      }
      xhr.send()
    })
  }
}

function sendRequestPromise () {
  avatar.src = './assets/3031256.png'
  const inputText = document.getElementById('input').value
  const temp = new PromisedXHR()
  temp.send('GET', url + inputText)
    .then(r => avatar.src = r.avatar_url)
    .catch(() => {
      avatar.src = ''
      setTimeout(() => alert('Not found'), 10)
    })
}

function sendRequestFetch () {
  avatar.src = './assets/3031256.png'
  const inputText = document.getElementById('input').value
  fetch(url + inputText)
    .then(r => {
      if (r.status === 200) {
        return r.json()
      } else {
        throw `error ${r.statusText}`
      }
    })
    .then(inner =>avatar.src = inner.avatar_url)
    .catch(() => {
      avatar.src = ''
      setTimeout(() => alert('Not found'), 10)
    })
}

function sendRequestAxios () {
  avatar.src = './assets/3031256.png'
  const inputText = document.getElementById('input').value
  axios.get(url + inputText)
    .then(r => avatar.src = r.data.avatar_url)
    .catch(() => {
      avatar.src = ''
      setTimeout(() => alert('Not found'), 10)
    })
}
