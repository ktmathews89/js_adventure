import {getCurrentLevel, isGameover} from './levels';

let messageBox = document.getElementById('message');

const gameBoard = document.getElementById('game-space');

const gameSpaceHeight = () => gameBoard.clientHeight;
const gameSpaceWidth = () => gameBoard.clientWidth;

const setMessage = (newMessage) => {
    console.log('updating message to: ', newMessage);
    messageBox.innerHTML = newMessage;
};

/* Custom Events */
const setGame = new Event('setGame');

/* Event Listners */
document.addEventListener('levelWon', function (){
    if (!isGameover()){
        setMessage('LANDED!');
    }
});

export {gameBoard, gameSpaceHeight, gameSpaceWidth, setGame, setMessage, messageBox};
