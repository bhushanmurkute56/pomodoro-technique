let workMinutes = 25;
    let seconds = 0;
    let timer;
    let isRunning = false;

    function updateDisplay() {
      const timerElement = document.getElementById("timer");
      let min = workMinutes.toString().padStart(2, '0');
      let sec = seconds.toString().padStart(2, '0');
      timerElement.textContent = `${min}:${sec}`;
    }

    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          if (seconds === 0) {
            if (workMinutes === 0) {
              clearInterval(timer);
              isRunning = false;
              alert("Time's up!");
              return;
            }
            workMinutes--;
            seconds = 59;
          } else {
            seconds--;
          }
          updateDisplay();
        }, 1000);
      }
    }

    function pauseTimer() {
      clearInterval(timer);
      isRunning = false;
    }

    function resetTimer() {
      clearInterval(timer);
      workMinutes = 25;
      seconds = 0;
      isRunning = false;
      updateDisplay();
    }
    updateDisplay();