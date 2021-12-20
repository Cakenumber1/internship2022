const xhr = new XMLHttpRequest()
const abortBtn = document.getElementById('abortButton')
const sendBtn = document.getElementById('sendButton')
let avatarScr = document.getElementById('avatar')

function sendRequest () {
  const inputText = document.getElementById('input').value
  avatarScr.src = './assets/3031256.png'
  abortBtn.classList.toggle('active')
  sendBtn.classList.toggle('active')
  xhr.open('GET', `https://api.github.com/users/${inputText}`, true)

  xhr.onload = function () {
    if (this.status === 200) {
      avatarScr.src = './assets/3031256.png'
      avatarScr.src = JSON.parse(this.responseText).avatar_url
    } else {
      avatarScr.src = ''
      setTimeout(() => { alert(JSON.parse(this.responseText).message) }, 100)
    }
    abortBtn.classList.toggle('active')
    sendBtn.classList.toggle('active')
  }
  xhr.send()
}

function abortRequest () {
  xhr.abort()
  abortBtn.classList.toggle('active')
  sendBtn.classList.toggle('active')
  avatarScr.src = ''
}
