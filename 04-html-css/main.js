let tx = document.getElementsByClassName('comment-create__comment-text');


for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", onInput, false);
}

function onInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

function showComments() {
  let sc = document.getElementsByClassName('show-comments')[0];
  let coms = document.getElementsByClassName('comment');
  sc.style.display ='none'
  for (let i = 0; i < coms.length; i++) {
    coms[i].style.display = 'flex'
  }
}

let likes = document.getElementsByClassName('like');
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", like);
}

function like() {
  let lk = this.getElementsByClassName('like-color')[0];
  let c = this.getElementsByClassName('likes__amount')[0];
  if (lk.getAttribute('fill') == 'red') {
    lk.setAttribute('fill', 'currentColor')
    c.innerText = ((parseInt(c.innerText) - 1) > 0) ? parseInt(c.innerText) - 1: 0
  }
  else{
    lk.setAttribute('fill', 'red')
    c.innerText = parseInt(c.innerText) + 1
  }
}

