'use strict';

let index = 0;
let searchWord = '';
let inputWord = '';
const wordList = [];
const dictionary = document.querySelector('.box');
const addButton = document.querySelector('.btn-add');
const searchButton = document.querySelector('.btn-search');
const checkButton = document.querySelector('.btn-check');
const closeButton = document.querySelector('.close-modal')
const list = document.querySelector('.list');
const info = document.getElementById('info-text');

const classToggle = function () {
    list.classList.toggle('hidden');
    dictionary.classList.toggle('hidden');
    document.getElementById('tittle').classList.toggle('hidden');
}

addButton.addEventListener('click', function () {

    if (document.getElementById('input').value.trim() === '') {
        info.textContent = 'No word was added';
    } else if (wordList.includes(document.getElementById('input').value.trim())) {
        info.innerHTML = `"<b>${document.getElementById('input').value.trim()}</b>" has been already added`;
    } else {
        wordList[index] = document.getElementById('input').value.trim();
        info.innerHTML = `The following word: "<b>${wordList[index]}</b>" has been added to the list`
        document.getElementById('input').value = '';
        ++index;
        console.log(wordList);
    }
})

searchButton.addEventListener('click', function () {
    searchWord = document.getElementById('input').value.trim();
    document.getElementById('input').value = '';
    if (wordList.includes(searchWord)) {
        info.innerHTML = `"<b>${searchWord}</b>" is present in the list`
    } else if (searchWord === '') {
        info.textContent = 'No word was added';
    } else {
        info.innerHTML = `"<b>${searchWord}</b>" is NOT present in the list`
    }
})

checkButton.addEventListener('click', function () {
    classToggle();
    for (let i = 0; i < wordList.length; ++i) {
        document.getElementById('content').innerHTML += `<p>${i + 1}) ${wordList[i]}</p>`;
    }
})

closeButton.addEventListener('click', function () {
    classToggle();
    document.getElementById('content').innerHTML = '';
})




