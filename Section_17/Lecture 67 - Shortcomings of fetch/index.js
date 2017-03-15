const url = 'https://jsonplaceholder.typicode.com/posts123456/'

fetch(url)
  .then(response => {
    if (!response.ok) throw 'Promise rejected';

    return response.json()
  })
  .then(json => console.log(json))
  .catch(error => console.log('BAD', error));
