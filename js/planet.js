
const planet = document.getElementById('planet');

const getPosX = () => (planet.style.left ? parseInt(planet.style.left.split('px').shift()) : 0);
const getPosY = () => (planet.style.top ? parseInt(planet.style.top.split('px').shift()) : 0);

const showPlanet = (x, y) => {
    planet.style.visibility = "visible";
};

const hidePlanet = () => {
    planet.style.visibility = "hidden";
};

const setupPlanet = (level) => {
    return null;
};

export {setupPlanet};
