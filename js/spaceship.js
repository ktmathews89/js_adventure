import { levelsConfig } from './levels';

const spaceship = document.getElementById('spaceship');
const speed = 30;

const showSpaceship = () => {
    spaceship.style.visibility = "visible";
    spaceship.style.top = levelsConfig[1]["spaceship"].top;
    spaceship.style.right = levelsConfig[1]["spaceship"].right;
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
    spaceship.style.top = (getPosY() + speed) + 'px';
};

export {setupSpaceship, moveLeft, moveRight, moveUp, moveDown};
