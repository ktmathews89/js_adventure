import {setMessage} from './gamespace';

const HIGHEST_LEVEL = 3;
const GAME_OVER = 4;

let currentLevel = 1;
const getCurrentLevel = () => currentLevel;

const isGameover = () => currentLevel === GAME_OVER;

const levelsConfig = [
    {
        spaceship: { top: "50%", left: "95%" },
        planet: { top: "50%", left: "5%" }
    },
    {
        spaceship: { top: "90%", left: "48%" },
        planet: { top: "10%", left: "50%" }
    },
    {
        spaceship: { top: "50%", left: "10%" },
        planet: { top: "5%", left: "5%" },
        obstacles: [
            { height: "3", width: "4", top: "8%", left: "50%" }
        ]
    },
    {
        spaceship: {top: "50%", left: "50%"},
        planet: {top: "50%", left: "50%"}
    }
];

/* Not sure which one of these is good to use... */
const getCurrentLevelConfig = () => {
    return levelsConfig[currentLevel - 1];
};
const getLevelConfig = (level) => levelsConfig[level - 1];

/* Custom Events */
const levelWonEvent = new Event('levelWon');
const nextLevelEvent = new Event('nextLevel');

/* Event Listeners */
document.addEventListener('nextLevel', function () {
    if (currentLevel < HIGHEST_LEVEL){
        currentLevel++;
        setMessage('LEVEL ' + currentLevel);
    } else if (currentLevel === HIGHEST_LEVEL) {
        currentLevel = GAME_OVER;
        setMessage("Game Over");
    }
});

document.addEventListener('setGame', function () {
    if (!isGameover()) {
        setMessage('LEVEL ' + currentLevel);
    }
});

export {levelsConfig, getCurrentLevel, getCurrentLevelConfig, levelWonEvent, nextLevelEvent, isGameover};
