let timers = [];
let selectedTimerIndex = null;

function saveTimer() {
    const title = document.getElementById('timerTitle').value || 'New Timer';
    const hours = document.getElementById('hours').value.padStart(2, '0');
    const minutes = document.getElementById('minutes').value.padStart(2, '0');
    const seconds = document.getElementById('seconds').value.padStart(2, '0');
    const date = document.getElementById('datePicker').value;

    const timerData = { title, hours, minutes, seconds, date };
    timers.push(timerData);

    updateTimerList();
}

function updateTimerList() {
    const list = document.getElementById('timerList');
    list.innerHTML = '';

    timers.forEach((timer, index) => {
        const button = document.createElement('button');
        button.classList.add('timer-button');
        button.textContent = timer.title;
        button.onclick = () => loadTimer(index);
        
        if (index === selectedTimerIndex) {
            button.classList.add('active');
        }
        
        list.appendChild(button);
    });
}

function loadTimer(index) {
    const timer = timers[index];
    document.getElementById('timerTitle').value = timer.title;
    document.getElementById('hours').value = timer.hours;
    document.getElementById('minutes').value = timer.minutes;
    document.getElementById('seconds').value = timer.seconds;
    document.getElementById('datePicker').value = timer.date;
    
    selectedTimerIndex = index;
    updateTimerList();
}

function addNewTimer() {
    document.getElementById('timerTitle').value = '';
    document.getElementById('hours').value = '00';
    document.getElementById('minutes').value = '00';
    document.getElementById('seconds').value = '00';
    document.getElementById('datePicker').value = '';
    
    selectedTimerIndex = null;
    updateTimerList(); 
}

function removeTimer() {
    if (selectedTimerIndex !== null) {
        timers.splice(selectedTimerIndex, 1);
        selectedTimerIndex = null;
        updateTimerList();
        addNewTimer();
    }
}
