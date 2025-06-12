let time = 25 * 60;
let timerInterval;

function updateTimer() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      alert("Focus session complete.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  updateTimer();
}

updateTimer();
