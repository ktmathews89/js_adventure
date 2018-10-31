import * as controls from './controls';
import {setGame} from './gamespace';
import * as levels from './levels';
import * as planet from './planet';
import * as spaceship from './spaceship';
import * as utils from './util';

document.dispatchEvent(setGame);


/*
 * Problem 1 - Make the spaceship move
 *
 *  Problem: The control keys are broken. We can see we are pressing a key
 *  because the keys are lighting up in the control panel on the bottom of
 *  the game, but the spaceship isn't moving. Let's fix that.
 *
 *  To Solve: Add logic to the arrowPressed function so that based on the key
 *  value passed in the appropriate spaceship move function will be called.
 *  The spaceship has 4 move functions, moveRight, moveLeft, moveUp, moveDown.
 *  You can called them like: spaceship.moveRight().
 *
 *  The key parameter is a string and will be one of 4 values:
 *  'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'
 *
 */
const arrowPressed = (key) => {

};


export {arrowPressed};
