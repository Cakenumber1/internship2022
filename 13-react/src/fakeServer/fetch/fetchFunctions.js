export function fetchData(data) {
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function fetchDataWithDelay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function fetchDataFromServer() {
  return fetch('http://localhost:5000/articles')
    .then((res) => res.json())
}

export function fetchPost(_name, _url) {
  fetch('http://localhost:5000/articles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: _name,
      url: _url,
    })
  })
}
