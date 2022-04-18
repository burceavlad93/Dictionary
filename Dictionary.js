let wordsList = "";
function addWord() {
	const addedWord = (document.getElementById("add").value);
	wordsList += addedWord;
}

function searchWord() {
  const searchedWord = document.getElementById("search").value;
  let isInDictionary = wordsList.search(searchedWord);
  if (isInDictionary > -1) {
  	alert(`The word "${searchedWord}" is in dictionary!`);
  } else {
  	alert(`The word "${searchedWord}" is not in dictionary!`);
  }
}
