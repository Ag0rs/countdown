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
