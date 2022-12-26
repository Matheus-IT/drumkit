type SoundsType = {
    [key: string]: () => HTMLAudioElement
};

const sounds: SoundsType = {
    'w': () => new Audio('sounds/tom-1.mp3'),
    'a': () => new Audio('sounds/tom-2.mp3'),
    's': () => new Audio('sounds/tom-3.mp3'),
    'd': () => new Audio('sounds/tom-4.mp3'),
    'j': () => new Audio('sounds/snare.mp3'),
    'k': () => new Audio('sounds/crash.mp3'),
    'l': () => new Audio('sounds/kick-bass.mp3'),
};

const drumSet = document.querySelectorAll('.drum');

drumSet.forEach(e => {
    e.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const audioElement = sounds[target.innerText]();
        audioElement.play();
    });
});

document.addEventListener('keypress', function(event) {
    const audioElement = sounds[event.key]();
    audioElement.play();
});

export {}; // needed to make it a module
