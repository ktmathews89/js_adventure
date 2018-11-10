import {gameSpaceHeight, gameSpaceWidth} from './gamespace';
import {getCurrentLevelConfig} from './levels';
import {getPlanetBounds} from './planet';
import {yPerToNum, xPerToNum, getXNum, getYNum, isOverlapping} from './util';

const spaceship = document.getElementById('spaceship');
const MIN_SPEED = 5;
const MAX_SPEED = 50;
let speed = 10;
let freezeSpaceship = false;

const SPACESHIP_WIDTH = spaceship.clientWidth;
const SPACESHIP_HEIGHT = spaceship.clientHeight;

const SPACESHIP_OFFSET_X = SPACESHIP_WIDTH / 2;
const SPACESHIP_OFFSET_Y = SPACESHIP_HEIGHT / 2;

const getPosX = () => getXNum(spaceship);
const getPosY = () => getYNum(spaceship);

const setSpaceshipX = (leftNum) => spaceship.style.left = (leftNum + 'px');
const setSpaceshipY = (topNum) => spaceship.style.top = (topNum + 'px');

const showSpaceship = () => spaceship.style.visibility = "visible";
const hideSpaceship = () => spaceship.style.visibility = "hidden";

const setupSpaceship = () => {
    const spaceshipConfig = getCurrentLevelConfig().spaceship;

    // convert percentage configs to px for use
    const xValue = xPerToNum(spaceshipConfig.left);
    const yValue = yPerToNum(spaceshipConfig.top);

    setSpaceshipX(xValue);
    setSpaceshipY(yValue);
    showSpaceship();
    freezeSpaceship = false;
};

const canMoveX = (xPos) => {
    if (freezeSpaceship) {
        return false;
    }
    let xRightBound = xPos + SPACESHIP_OFFSET_X;
    let xLeftBound = xPos - SPACESHIP_OFFSET_X;
    return (xRightBound < gameSpaceWidth() && xLeftBound > 0);
};

const canMoveY = (yPos) => {
    if (freezeSpaceship) {
        return false;
    }
    let yBottomBound = yPos + SPACESHIP_OFFSET_Y;
    let yTopBound = yPos - SPACESHIP_OFFSET_Y;
    return (yBottomBound < gameSpaceHeight() && yTopBound > 0);
};

const moveLeft = () => {
    let currentPos = getXNum(spaceship);
    let updatedPos = currentPos - speed;
    if (canMoveX(updatedPos)){
        setSpaceshipX(updatedPos);
    }
};

const moveRight = () => {
    let currentPos = getXNum(spaceship);
    let updatedPos = currentPos + speed;
    if (canMoveX(updatedPos)){
        setSpaceshipX(updatedPos);
    }
};

const moveUp = () => {
    let currentPos = getYNum(spaceship);
    let updatedPos = currentPos - speed;
    if (canMoveY(updatedPos)){
        setSpaceshipY(updatedPos);
    }
};

const moveDown = () => {
    let currentPos = getYNum(spaceship);
    let updatedPos = currentPos + speed;
    if (canMoveY(updatedPos)){
        setSpaceshipY(updatedPos);
    }
};

const isLanded = () => {
    let shipX = getXNum(spaceship);
    let shipY = getYNum(spaceship);
    let shipBounds = {
        left: shipX - SPACESHIP_OFFSET_X,
        right: shipX + SPACESHIP_OFFSET_X,
        top: shipY - SPACESHIP_OFFSET_Y,
        bottom: shipY + SPACESHIP_OFFSET_Y,
    };
    return isOverlapping(shipBounds, getPlanetBounds());
};

/* Event Listners */
document.addEventListener('setGame', function (e){
    setupSpaceship();
});

document.addEventListener('levelWon', function (){
    freezeSpaceship = true;
});

document.addEventListener('nextLevel', function (e){
    hideSpaceship();
    setupSpaceship();
});

export {
    setupSpaceship,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    isLanded,
    speed,
    MAX_SPEED,
    MIN_SPEED
};
