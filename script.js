const redSignal = document.getElementById('red');
const yellowSignal = document.getElementById('yellow');
const greenSignal = document.getElementById('green');
const message = document.getElementById('message');

function showMessage(color) {
    switch(color) {
        case 'red':
            message.textContent = "Stop! The signal is red.";
            message.style.textShadow = "2px 2px 4px red"; 
            break;
        case 'yellow':
            message.textContent = "Get ready! The signal is yellow.";
            message.style.textShadow = "2px 2px 4px yellow"
            break;
        case 'green':
            message.textContent = "Go! The signal is green.";
            message.style.textShadow = "2px 2px 4px green"
            break;
        default:
            message.textContent = "";
    }
}

redSignal.addEventListener('click', () => showMessage('red'));
yellowSignal.addEventListener('click', () => showMessage('yellow'));
greenSignal.addEventListener('click', () => showMessage('green'));
