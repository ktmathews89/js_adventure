import {keyListners as setupKeyListners} from './controls';
import {setupSpaceship, moveLeft} from './spaceship';
import {setupPlanet} from './planet';

let LEVEL = 1;

/* Setup */
setupKeyListners();
setupSpaceship();
setupPlanet();
