
/* UP key actions */
const controlUpPress = () => {
    document.querySelector('#up-key').classList.add('active');
};

const controlUpRelease = () => {
    document.querySelector('#up-key').classList.remove('active');
};

/* DOWN key actions */
const controlDownPress = () => {
    document.querySelector('#down-key').classList.add('active');
};

const controlDownRelease = () => {
    document.querySelector('#down-key').classList.remove('active');
};

/* RIGHT key actions */
const controlRightPress = () => {
    document.querySelector('#right-key').classList.add('active');
};

const controlRightRelease = () => {
    document.querySelector('#right-key').classList.remove('active');
};

/* LEFT key actions */
const controlLeftPress = () => {
    document.querySelector('#left-key').classList.add('active');
};

const controlLeftRelease = () => {
    document.querySelector('#left-key').classList.remove('active');
};


const keyListners = () => {
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
