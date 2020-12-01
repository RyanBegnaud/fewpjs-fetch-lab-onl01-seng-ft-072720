fetch('https://anapioficeandfire.com/api/books')
  console.log(resp)
  .then(resp => resp.json())
  .then(json => console.log(json));