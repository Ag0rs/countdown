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

