export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
