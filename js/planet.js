import {getCurrentLevelConfig} from './levels';
import {yPerToPx, xPerToPx, getXNum, getYNum} from './util';

const planet = document.getElementById('planet-wrapper-outer');
const PLANET_WIDTH = planet.clientWidth;
const PLANET_HEIGHT = planet.clientHeight;

const PLANET_OFFSET_X = PLANET_WIDTH / 2;
const PLANET_OFFSET_Y = PLANET_HEIGHT / 2;

const setPlanetX = (leftPx) => planet.style.left = leftPx;
const setPlanetY = (topPx) => planet.style.top = topPx;

const showPlanet = () => planet.style.visibility = "visible";
const hidePlanet = () => planet.style.visibility = "hidden";

/* called to setup level */
const setupPlanet = () => {
    const planetConfig = getCurrentLevelConfig().planet;

    // convert percentage configs to px for use
    const xValue = xPerToPx(planetConfig.left);
    const yValue = yPerToPx(planetConfig.top);

    setPlanetX(xValue);
    setPlanetY(yValue);
    showPlanet();
};

const getPlanetBounds = () => {
    let planetX = getXNum(planet);
    let planetY = getYNum(planet);
    return {
        left: planetX - PLANET_OFFSET_X,
        right: planetX + PLANET_OFFSET_X,
        top: planetY - PLANET_OFFSET_Y,
        bottom: planetY + PLANET_OFFSET_Y,
    };
};

const addPlanetGlow = () => {
    document.getElementById('planet-glow').classList.add('glowing');
}
const removePlanetGlow = () => {
    document.getElementById('planet-glow').classList.remove('glowing');
}

/* Event Listners */
document.addEventListener('setGame', function (){
    setupPlanet();
    removePlanetGlow();
});

document.addEventListener('levelWon', function (){
    addPlanetGlow();
});

document.addEventListener('nextLevel', function (e){
    removePlanetGlow();
    hidePlanet();
    setupPlanet();
});

export {setupPlanet, getPlanetBounds, addPlanetGlow};
