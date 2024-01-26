const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
];

teams.forEach ((team) => {
    team.score = randomNumbers(1, 100);
    team.foul = randomNumbers(1, 10);
});


function randomNumbers(min, max) {
    let numRand = Math.floor(Math.random() * (max - min + 1) + min);
    return numRand;
};

console.log(teams);




// Creare un nuovo array i cui elementi contengono nomi e falli subiti, recuperarli tramite il destructuring, e console.log
// chiesto aiuto dal pubblico per vedere la luce in fondo al tunnel!

const newArray = teams.map((team) => {
    const {name, foul} = team;
    console.log(name, foul);

    let newTeam = {
        name: name,
        foul: foul,
    };
    return newTeam;
});

console.log(newArray);