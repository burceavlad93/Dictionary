let wordsList = "";
function addWord() {
	const addedWord = (document.getElementById("add").value);
	wordsList += addedWord;
}

function searchWord() {
  const searchedWord = document.getElementById("search").value;
  let foundWord = wordsList.search(searchedWord);
  if (foundWord > -1) {
  	alert(`"${searchedWord}" exists in the dictionary!`);
  } else {
  	alert(`"${searchedWord}" is not found in the dictionary!`);
  }
}
