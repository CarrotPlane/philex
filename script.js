let selectedTime = 25;
let time = selectedTime * 60;
let timerInterval;

const quotes = [
  "Time is the wisest counselor of all.",
  "He who has a why can bear almost any how.",
  "We suffer more in imagination than in reality.",
  "You have power over your mind – not outside events.",
  "Freedom is the oxygen of the soul.",
  "The unexamined life is not worth living.",
  "Happiness depends upon ourselves.",
  "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "We must use time as a tool, not as a couch."
]; // i sound like a nerd, but no its just chatgpt

document.getElementById("quote").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];


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
