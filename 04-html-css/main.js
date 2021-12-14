class TexareaResize {
  constructor() {
    this.tx = document.getElementsByClassName('comment-create__comment-text');
    for (let i = 0; i < this.tx.length; i++) {
      this.tx[i].setAttribute('style', 'height:' + (this.tx[i].scrollHeight) + 'px;overflow-y:hidden;');
      this.tx[i].addEventListener('input', this.onInput, false);
    }
  }

  onInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  }
}

class LikeUnlike {
  constructor() {
    this.likes = document.getElementsByClassName('like');
    for (let i = 0; i < this.likes.length; i++) {
      this.likes[i].addEventListener('click', this.like);
    }
  }

  like() {
    let lk = this.getElementsByClassName('like-color')[0];
    let c = this.getElementsByClassName('likes__amount')[0];
    if (lk.getAttribute('fill') == 'red') {
      lk.setAttribute('fill', 'currentColor')
      c.innerText = ((parseInt(c.innerText) - 1) > 0) ? parseInt(c.innerText) - 1 : 0
    } else {
      lk.setAttribute('fill', 'red')
      c.innerText = parseInt(c.innerText) + 1
    }
  }
}

function showComments() {
  let sc = document.getElementsByClassName('show-comments')[0];
  let coms = document.getElementsByClassName('comment');
  sc.style.display = 'none'
  for (let i = 0; i < coms.length; i++) {
    coms[i].style.display = 'flex'
  }
}

let texareaResize = new TexareaResize();
let likeUnlike = new LikeUnlike();
