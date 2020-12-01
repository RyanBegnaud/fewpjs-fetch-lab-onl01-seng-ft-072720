function fetchBooks(){
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => console.log(json));
}