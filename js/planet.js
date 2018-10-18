import {getLevelConfig} from './levels';

const planet = document.getElementById('planet');

const getPosX = () => (planet.style.left ? parseInt(planet.style.left.split('px').shift()) : 0);
const getPosY = () => (planet.style.top ? parseInt(planet.style.top.split('px').shift()) : 0);

const setPlanetX = (left) => {
    planet.style.left = left;
}

const setPlanetY = (top) => {
    planet.style.top = top;
}

const showPlanet = (x, y) => {
    planet.style.visibility = "visible";
};

const hidePlanet = () => {
    planet.style.visibility = "hidden";
};

const setupPlanet = () => {
    const planetConfig = getLevelConfig().planet;

    setPlanetX(planetConfig.left);
    setPlanetY(planetConfig.top);
};

export {setupPlanet};
