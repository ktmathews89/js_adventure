let currentLevel = 1;

const levelsConfig = [
    {
        spaceship: { top: "50%", left: "95%" },
        planet: { top: "50%", left: "5%" }
    },
    {
        spaceship: { top: "90%", right: "48%" },
        planet: { top: "10%", left: "50%" }
    },
    {
        spaceship: { top: "50%", right: "10%" },
        planet: { top: "5%", left: "5%" },
        obstacles: [
            { height: "3", width: "4", top: "8%", right: "50%" }
        ]
    }
];

const getLevel = () => currentLevel;

const getLevelConfig = () => levelsConfig[currentLevel - 1];

export { levelsConfig, getLevel, getLevelConfig };
