let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => { 
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        } else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
        playAudio();
    });
});

function buttonClick(value) {
    document.getElementById('inputbox').value += value;

    switch(value) {
        case '1':
            speak('one');
            break;
        case '2':
            speak('two');
            break;
        case '3':
            speak('three');
            break;
        case '4':
            speak('four');
            break;
        case '5':
            speak('five');
            break;
        case '6':
            speak('six');
            break;
        case '7':
            speak('seven');
            break;
        case '8':
            speak('eight');
            break;
        case '9':
            speak('nine');
            break;
        case '0':
            speak('zero');
            break;
        case '+':
            speak('plus');
            break;
        case '-':
            speak('minus');
            break;
        case '*':
            speak('multiply');
            break;
        case '/':
            speak('divide');
            break;
        case '%':
            speak('modulo');
            break;
        default:
            break;
    }
}

function playAudio() {
    var audio = new Audio('sounds/sound3.mp3'); // Correct path for the audio
    audio.play().catch(e => console.error('Audio playback error:', e));
}

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
