const score = document.getElementById("score");
const reactionScore = document.getElementById("reaction-score");
const memoryScore = document.getElementById("memory-score");
const verbalScore = document.getElementById("verbal-score");
const visualScore = document.getElementById("visual-score");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    updateUI(data);
  })
  .catch((err) => {
    console.error(err);
  });

  const updateUI = (data) => {
    reactionScore.textContent = data[0].score;
    memoryScore.textContent = data[1].score;
    verbalScore.textContent = data[2].score;
    visualScore.textContent = data[3].score;

    // Calculate total score
    const scores = data.map(item => item.score).reduce((a, b) => a + b, 0);
    const totalScore = Math.round(scores / data.length);
    
    score.textContent = totalScore;
  }