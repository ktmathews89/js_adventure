
const LEVEL_1_CORDINATES = {top: '50%', right: '0%'};

const spaceship = document.getElementById('spaceship');
const speed = 5;

const showSpaceship = () => {
    spaceship.style.visibility = "visible";
};

const hideSpaceship = () => {
    spaceship.style.visibility = "hidden";
};

const setupSpaceship = (level) => {
    switch (level) {
        case 1:
            showSpaceship();
            break;
        default:
            showSpaceship();
            break;
    }
};
const getPosX = () => (spaceship.style.right ? parseInt(spaceship.style.right.split('px').shift()) : 0);
const getPosY = () => (spaceship.style.top ? parseInt(spaceship.style.top.split('px').shift()) : 0);

const moveLeft = () => {
    spaceship.style.right = (getPosX() + speed) + 'px';
};

const moveRight = () => {
    spaceship.style.right = (getPosX() - speed) + 'px';
};

const moveUp = () => {
    spaceship.style.top = (getPosY() - speed) + 'px';
};

const moveDown = () => {
    spaceship.style.right = (getPosY() + speed) + 'px';
};


export {setupSpaceship, moveLeft};
