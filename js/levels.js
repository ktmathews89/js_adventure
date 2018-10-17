const levelsConfig = [
    {
        spaceship: { top: "50%", right: "5%" },
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

export { levelsConfig };
