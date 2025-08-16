let [h, m, s] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  let hh = h < 10 ? "0" + h : h;
  let mm = m < 10 ? "0" + m : m;
  let ss = s < 10 ? "0" + s : s;
  document.getElementById("display").innerText = `${hh}:${mm}:${ss}`;
}

function startTimer() {
  if (!running) {
    timer = setInterval(() => {
      s++;
      if (s === 60) { s = 0; m++; }
      if (m === 60) { m = 0; h++; }
      updateDisplay();
    }, 1000);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  [h, m, s] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  running = false;
}

function lapTimer() {
  const lapTime = document.getElementById("display").innerText;
  const li = document.createElement("li");
  li.innerText = lapTime;
  document.getElementById("laps").appendChild(li);
}

updateDisplay(); // initialize the display
