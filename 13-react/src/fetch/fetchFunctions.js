export function fetchData(data) {
  return new Promise((resolve) => {
    resolve(data)
  })
}

export function fetchDataWithDelay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}

