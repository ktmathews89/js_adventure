import {getCurrentLevel} from './levels';

const gameBoard = document.getElementById('game-space');

const gameSpaceHeight = () => gameBoard.clientHeight;
const gameSpaceWidth = () => gameBoard.clientWidth;

/* Custom Events */
const setGame = new Event('setGame');

/* Event Listners */


export {gameBoard, gameSpaceHeight, gameSpaceWidth, setGame};
