type SoundsType = {
    [key: string]: () => void
};

const sounds: SoundsType = {
    'w': () => {
        new Audio('sounds/tom-1.mp3').play();
    },
    'a': () => {
        new Audio('sounds/tom-2.mp3').play();
    },
    's': () => {
        new Audio('sounds/tom-3.mp3').play();
    },
    'd': () => {
        new Audio('sounds/tom-4.mp3').play();
    },
    'j': () => {
        new Audio('sounds/snare.mp3').play();
    },
    'k': () => {
        new Audio('sounds/crash.mp3').play();
    },
    'l': () => {
        new Audio('sounds/kick-bass.mp3').play();
    },
};

const drumSet = document.querySelectorAll('.drum');

drumSet.forEach(e => {
    e.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        sounds[target.innerText]();
    });
});

export {}; // needed to make it a module
