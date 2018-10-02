const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const firstScore = document.querySelector("#firstScore");
const secondScore = document.querySelector("#secondScore");
const winScore = document.querySelector("#winningScore");
const input = document.querySelector("input");

let score1 = 0;
let score2 = 0;
let minWin = 5;
let gameOver = false;

//input event listener
input.addEventListener("change", () => {
  winScore.textContent = input.value;
  minWin = Number(input.value);
});

//player1 event listener
player1.addEventListener("click", () => {
  if (!gameOver) {
    score1++;
    if (score1 === minWin) {
      gameOver = true;
      firstScore.classList.add("win");
    }
    firstScore.textContent = score1;
  }
});

//player2 event listener
player2.addEventListener("click", () => {
  if (!gameOver) {
    score2++;
    if (score2 === minWin) {
      gameOver = true;
      secondScore.classList.add("win");
    }
    secondScore.textContent = score2;
  }
});

//reset event listener
reset.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  firstScore.textContent = 0;
  secondScore.textContent = 0;
  gameOver = false;
  firstScore.classList.remove("win");
  secondScore.classList.remove("win");
});
