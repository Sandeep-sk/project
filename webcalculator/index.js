let screen = document.getElementById('screen');
let calculator = document.getElementsByClassName('btn');
for (let buttonText of calculator) {
    buttonText.addEventListener('click', (event) => {
        if (screen.value == '') { screen.style.backgroundColor = 'white'; }
        let screenValue = "";
        let clickValue = buttonText.innerText;
        if (clickValue == 'X') {
            clickValue = '*';
            screen.value += '*';
        }
        else if (clickValue == '=') {
            screen.value = eval(screen.value);
            screenValue = "";

        }
        else if (clickValue == 'C') {
            screen.value = "";
            screenValue = '';
        }
        else if (clickValue == 'BackSpace') {
            let str = "";
            str += (screen.value).slice(0, str.length - 1);
            screen.value = str;
        }
        else {
            screenValue += clickValue
            screen.value += screenValue;
        }
    });
}

