const clickButton = document.querySelector(".clicker__click-btn"),
      scoreText = document.querySelector(".clicker__click-score");
      
let statistic = {
    score: 0
}

// Functions

function click(scoreText) {
    scoreText.textContent = ++statistic.score;
}

// Events

clickButton.addEventListener("click", () => click(scoreText));