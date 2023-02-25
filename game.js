'use strict';
let player = true;
let isWinnerWin = true;
let td = document.getElementsByTagName('td');
let title = document.querySelector('h2');
let reset = document.getElementById('reset');
let winnerCell = [];
winner();

for (let i = 0; i < td.length; i++) {
  td[i].addEventListener('click', function() {
    if (this.innerHTML === '' && isWinnerWin) {
      setImage(i, this);
    }
  })
}

reset.addEventListener('click', function() {
  winner();
  player = true;
  isWinnerWin = true;
  title.innerHTML = 'Player 1';
  for (let i = 0; i < td.length; i++) {
    td[i].innerHTML = '';
  }
})

function setImage(index, el) {
  if (winnerCell.includes(index)) {
    el.innerHTML = '<img src = "images/gold.jpg"  alt = "">';
    isWinnerWin = false;
    alert('You win...')
  } else {
    el.innerHTML = '<img src = "images/close.jpg"  alt = "">';
  }
  if (player) {
    title.innerHTML = 'Player 2';
    player = !player;
  } else {
    title.innerHTML = 'Player 1';
    player = !player;
  }
}

function winner() {
  winnerCell = [
    Math.floor(Math.random() * 25),
    Math.floor(Math.random() * 25),
    Math.floor(Math.random() * 25),
  ];
}