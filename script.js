let selectedTime = 25;
let time = selectedTime * 60;
let timerInterval;


function changeTime(delta) {
  selectedTime += delta;
  if (selectedTime < 5) selectedTime = 5;
  if (selectedTime > 180) selectedTime = 180;
  document.getElementById("time-display").textContent = selectedTime;
  clearInterval(timerInterval); 
  resetTimer(); // DOES THIS WORK??
}


function resetTimer() {
  clearInterval(timerInterval);
  time = selectedTime * 60;
  updateTimer();
}

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

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

updateTimer();
