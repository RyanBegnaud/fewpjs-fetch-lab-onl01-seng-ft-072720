function fetchBooks(){
  fetch('https://anapioficeandfire.com/api/books/5')
    .then(resp => resp.json())
    .then(json => console.log(json));
}