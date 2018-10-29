import {getCurrentLevel, isGameover} from './levels';

const gameBoard = document.getElementById('game-space');

const gameSpaceHeight = () => gameBoard.clientHeight;
const gameSpaceWidth = () => gameBoard.clientWidth;

const setMessage = (message) => {
    document.getElementById('message').innerHTML = message;
};

/* Custom Events */
const setGame = new Event('setGame');

/* Event Listners */
document.addEventListener('levelWon', function (){
    if (!isGameover()){
        setMessage('LANDED!');
    }
});

export {gameBoard, gameSpaceHeight, gameSpaceWidth, setGame, setMessage};
