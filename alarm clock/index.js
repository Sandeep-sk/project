class AlarmClock {
    constructor(source, selectDateBtn, setSnoozeBtn, setCancleBtn) {
        this.source = source;
        this.selectDateBtn = selectDateBtn;
        this.setSnoozeBtn = setSnoozeBtn;
        this.setCancleBtn = setCancleBtn;
        this.timeout = 0;
        this.intervalout = 0;
    }
    setAlarm() {
        this.selectDateBtn.addEventListener('blur', () => {
            let newDateSelect = new Date(this.selectDateBtn.value);
            let setAlarmTime = newDateSelect - (new Date());
            if (setAlarmTime >= 0) {
                this.timeout = setTimeout(() => {
                    source.play();
                    displaymessage('RINGING...');
                }, 6000);
            }
            else {
                displaymessage('invalid');
            }
        })
    }
    setSnooze() {
        this.setSnoozeBtn.addEventListener('click', () => {
            var clearinterval;
            displaymessage('SNOOZE');
            source.pause();
            clearTimeout(this.timeout);
            this.intervalout = setInterval(() => {
                source.play();
                displaymessage('SNOOZE');
            }, 8000);
        });
    }

    cancle() {
        this.setCancleBtn.addEventListener('click', () => {
            try {
                clearInterval(this.intervalout);
                clearTimeout(this.timeout);
            }
            catch (error) {
                // console.log(error);
            }
            finally {
                this.source.pause();
                displaymessage('CANCLE ALARM...');
            }
        });
    }
}

const source = new Audio();
source.src = 'alarm.mp3';
let selectDateBtn = document.getElementById('date');
let snoozebtn = document.getElementById('snoozebtn');
let canclebtn = document.getElementById('canclebtn');

// first setalarm then snooze and cancle btn work
selectDateBtn.addEventListener('click', () => {
    let alarm = new AlarmClock(source, selectDateBtn, snoozebtn, canclebtn);
    alarm.setAlarm();
    alarm.setSnooze();
    alarm.cancle();
});
//     ============================Wall Clock===========================
let populateDate = document.getElementById('currentTime');
setInterval(() => {
    let currentDate = new Date();
    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentDate.getDay()];
    let month = ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;
    let minutes = currentDate.getMinutes();
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    let seconds = currentDate.getSeconds();
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let currentTimeStr = day + "   " + month + "   " + date + "   " + year + "   " + hours + " : " + minutes + " : " + seconds;
    populateDate.innerHTML = currentTimeStr;
}, 1000);


//-------------message show success or faliure on submit----
function displaymessage(args) {
    let messageField = document.querySelector('.messageComes');
    let message;
    if (args == 'RINGING...') {
        message =
            `<div class="message">
        <h3><bold>${args}</bold></h3>
        </div>`;
    }
    else if (args == 'SNOOZE') {
        message =
            `<div class="message">
        <h3><bold>${args}</bold>:  MODE</h3>
        </div>`;
    }
    else if (args == 'CANCLE ALARM...') {
        message =
            `<div class="message">
        <h3><bold>${args}</bold></h3>
        </div>`;
    }

    else if (args == 'invalid') {
        message =
            `<div class="message">
        <h3><bold>NOT VALID</bold>:MAY BE TIME PASSED OR INVALID VALUE</h3>
        </div>`;
    }
    else {
        message =
            `<div class="message">
        <h3><bold>Error</bold>:MAY BE TIME PASSED OR INVALID VALUE</h3>
        </div>`;
    }

    messageField.innerHTML = message;
    setTimeout(() => {
        messageField.innerHTML = "";
    }, 4000);
}


