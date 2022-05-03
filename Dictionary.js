const wordList = [];
function addWord() {
	let addedWord = document.getElementById("add").value;
  let trimedWord = addedWord.trim();
  wordList.push(trimedWord);
  console.log(wordList);
}

function searchWord() {
	let searchedWord = document.getElementById("search").value;
  let trimedWord = searchedWord.trim();
  if(wordList.includes(trimedWord)) {
  	alert(`The word "${trimedWord}" exists in the dictionary!`);
  } else {
  	alert(`The word "${trimedWord}" does NOT exist in the dictionary!`);
  }
  
}
