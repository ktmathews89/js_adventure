import { getLevelConfig } from './levels';

const spaceship = document.getElementById('spaceship');
const speed = 1;

const showSpaceship = () => {
    spaceship.style.visibility = "visible";
};

const hideSpaceship = () => {
    spaceship.style.visibility = "hidden";
};

const setSpaceshipX = (left) => {
    spaceship.style.left = left;
}

const setSpaceshipY = (top) => {
    spaceship.style.top = top;
}

const setupSpaceship = () => {
    const spaceshipConfig = getLevelConfig().spaceship;

    console.log(spaceshipConfig);

    setSpaceshipX(spaceshipConfig.left);
    setSpaceshipY(spaceshipConfig.top);
};

const getPosX = () => (spaceship.style.left ? parseInt(spaceship.style.left.split('px').shift()) : 0);
const getPosY = () => (spaceship.style.top ? parseInt(spaceship.style.top.split('px').shift()) : 0);

const moveLeft = () => {
    spaceship.style.left = (getPosX() - speed) + '%';
};

const moveRight = () => {
    spaceship.style.left = (getPosX() + speed) + '%';
};

const moveUp = () => {
    spaceship.style.top = (getPosY() - speed) + '%';
};

const moveDown = () => {
    spaceship.style.top = (getPosY() + speed) + '%';
};

export {setupSpaceship, moveLeft, moveRight, moveUp, moveDown};
