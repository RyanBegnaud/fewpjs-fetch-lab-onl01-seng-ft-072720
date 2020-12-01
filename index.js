function fetchBooks(){
  fetch('https://anapioficeandfire.com/api/characters/1031')
    .then(resp => resp.json())
    .then(json => console.log(json));
}