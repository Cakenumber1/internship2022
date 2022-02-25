export function fetchData(data : any) {
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function fetchDataWithDelay(data : any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
