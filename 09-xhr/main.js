const xhr = new XMLHttpRequest()
const abortBtn = document.getElementById('abortButton')
const sendBtn = document.getElementById('sendButton')
const avatar = document.getElementById('avatar')

function sendRequest () {
  const inputText = document.getElementById('input').value
  avatar.src = './assets/3031256.png'
  abortBtn.classList.toggle('active')
  sendBtn.classList.toggle('active')
  xhr.open('GET', `https://api.github.com/users/${inputText}`, true)

  xhr.onload = function () {
    const ans = JSON.parse(this.responseText)
    if (this.status === 200) {
      avatar.src = './assets/3031256.png'
      avatar.src = ans.avatar_url
    } else {
      avatar.src = ''
      setTimeout(() => { alert(ans.message) }, 100)
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
