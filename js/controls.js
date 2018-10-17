import {moveUp, moveRight, moveDown, moveLeft} from './spaceship';

let keyUp = false;
let keyRight = false;
let keyDown = false;
let keyLeft = false;

/* UP key actions */
const controlUpPress = () => {
    document.querySelector('#up-key').classList.add('active');
    moveUp();
};

const controlUpRelease = () => {
    document.querySelector('#up-key').classList.remove('active');
};

/* DOWN key actions */
const controlDownPress = () => {
    document.querySelector('#down-key').classList.add('active');
    moveDown();
};

const controlDownRelease = () => {
    document.querySelector('#down-key').classList.remove('active');
};

/* RIGHT key actions */
const controlRightPress = () => {
    document.querySelector('#right-key').classList.add('active');
    moveRight();
};

const controlRightRelease = () => {
    document.querySelector('#right-key').classList.remove('active');
};

/* LEFT key actions */
const controlLeftPress = () => {
    document.querySelector('#left-key').classList.add('active');
    moveLeft();
};

const controlLeftRelease = () => {
    document.querySelector('#left-key').classList.remove('active');
};


const keyListners = () => {
    document.addEventListener('keypress', function (event) {
        console.log('keypressed', event);
    });

    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                controlUpPress();
                break;
            case 'ArrowDown':
                controlDownPress();
                break;
            case 'ArrowRight':
                controlRightPress();
                break;
            case 'ArrowLeft':
                controlLeftPress();
                break;
        };
    });

    document.addEventListener('keyup', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                controlUpRelease();
                break;
            case 'ArrowDown':
                controlDownRelease();
                break;
            case 'ArrowRight':
                controlRightRelease();
                break;
            case 'ArrowLeft':
                controlLeftRelease();
                break;
        };
    });
};

export {keyListners};
