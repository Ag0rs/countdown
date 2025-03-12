document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer(); 
});

function updateDate() {
    const dates = document.querySelector(".date");
    if (!dates) return;

    const now = new Date();
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    dates.textContent = now.toLocaleDateString("uk-UA", options);
}

document.addEventListener("DOMContentLoaded", updateDate);

document.addEventListener("DOMContentLoaded", function () {
    const settingsBtn = document.querySelector(".settings-btn");
    const themeButtons = document.querySelector(".theme-buttons");
    const blackThemeBtn = document.querySelector(".black-theme");
    const whiteThemeBtn = document.querySelector(".white-theme");
    const body = document.body;

    settingsBtn.addEventListener("click", function () {
        themeButtons.style.display = themeButtons.style.display === "flex" ? "none" : "flex";
    });

    blackThemeBtn.addEventListener("click", function () {
        body.classList.remove("light-mode");
    });

    whiteThemeBtn.addEventListener("click", function () {
        body.classList.add("light-mode");
    });
});

document.querySelector(".add-btn").addEventListener("click", function () {
    window.location.href = "pages/addcountdown.html";
});

document.getElementById('countdown-title').querySelector('span').addEventListener('click', function() {
    location.reload();
});

document.getElementById('avatarBtn').addEventListener('click', function() {
    var authMenu = document.getElementById('authMenu');
    if (authMenu.style.display === 'none' || authMenu.style.display === '') {
        authMenu.style.display = 'flex';
    } else {
        authMenu.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let clockInterval;
    let timerInterval;

    const clockBtn = document.querySelector(".clock-btn");
    const timerBtn = document.querySelector(".timer-btn");
    const timerSection = document.querySelector(".timer-section");
    const clockSection = document.querySelector(".timer-container");
    const timerInputs = document.querySelectorAll(".time-input");

    clockBtn.addEventListener("click", function() {
        if (timerSection.style.display === "block") {
            clockSection.style.display = "block";
            timerSection.style.display = "none";
        } else {
            clearInterval(clockInterval);
            clockInterval = setInterval(updateClock, 1000);
        }
    });

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    timerBtn.addEventListener("click", function() {
        clockSection.style.display = "none";
        
        timerSection.style.display = "block";
    });

    function startTimer() {
        const hours = parseInt(document.getElementById("hours").value, 10);
        const minutes = parseInt(document.getElementById("minutes").value, 10);
        const seconds = parseInt(document.getElementById("seconds").value, 10);
        
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(function() {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                alert("Timer finished!");
            } else {
                totalSeconds--;
                const hrs = Math.floor(totalSeconds / 3600);
                const mins = Math.floor((totalSeconds % 3600) / 60);
                const secs = totalSeconds % 60;

                document.getElementById("hours").value = String(hrs).padStart(2, "0");
                document.getElementById("minutes").value = String(mins).padStart(2, "0");
                document.getElementById("seconds").value = String(secs).padStart(2, "0");
            }
        }, 1000);
    }

    clockInterval = setInterval(updateClock, 1000);
});

document.querySelector('.timer-btn').addEventListener('click', function() {
    const timeInputs = document.querySelectorAll('.time-input');
    const dateInput = document.getElementById('datePicker');

    timeInputs.forEach(input => {
        input.value = 0;
    });

    dateInput.value = '';

    document.querySelector('.timer-section').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function () {
    let timerInterval;
    let running = false;

    const startBtn = document.getElementById("startBtn");
    const hoursInput = document.getElementById("hoursInput");
    const minutesInput = document.getElementById("minutesInput");
    const secondsInput = document.getElementById("secondsInput");
    const timerDisplay = document.getElementById("timerDisplay");
    const hoursElement = document.getElementById("timerHours");
    const minutesElement = document.getElementById("timerMinutes");
    const secondsElement = document.getElementById("timerSeconds");

    startBtn.addEventListener("click", function () {
        if (running) {
            clearInterval(timerInterval); // Якщо таймер вже працює, зупинити його
            startBtn.textContent = "Старт"; // Змінити текст на "Старт"
        } else {
            const hours = parseInt(hoursInput.value, 10) || 0;
            const minutes = parseInt(minutesInput.value, 10) || 0;
            const seconds = parseInt(secondsInput.value, 10) || 0;

            let totalSeconds = hours * 3600 + minutes * 60 + seconds;

            if (totalSeconds <= 0) {
                alert("Введіть коректний час.");
                return;
            }

            startBtn.textContent = "Пауза"; // Змінити текст на "Пауза"
            running = true;

            timerInterval = setInterval(function () {
                if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    alert("Таймер завершився!");
                    startBtn.textContent = "Старт"; // Відновлюємо кнопку на "Старт"
                    running = false;
                } else {
                    totalSeconds--;

                    const hrs = Math.floor(totalSeconds / 3600);
                    const mins = Math.floor((totalSeconds % 3600) / 60);
                    const secs = totalSeconds % 60;

                    hoursElement.textContent = String(hrs).padStart(2, "0");
                    minutesElement.textContent = String(mins).padStart(2, "0");
                    secondsElement.textContent = String(secs).padStart(2, "0");
                }
            }, 1000);
        }
    });
});
