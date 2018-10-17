import { levelsConfig } from './levels';
console.log(levelsConfig[1]["planet"]);

const planet = document.getElementById('planet');

const getPosX = () => (planet.style.left ? parseInt(planet.style.left.split('px').shift()) : 0);
const getPosY = () => (planet.style.top ? parseInt(planet.style.top.split('px').shift()) : 0);

const showPlanet = (x, y) => {
    planet.style.visibility = "visible";
    planet.style.top = levelsConfig[1]["planet"].top;
    planet.style.left = levelsConfig[1]["planet"].left;
};

const hidePlanet = () => {
    planet.style.visibility = "hidden";
};

const setupPlanet = (level) => {
    showPlanet();
    // return null;
};

export {setupPlanet};
