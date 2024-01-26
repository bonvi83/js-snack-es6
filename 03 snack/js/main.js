const bikes = [
    {
        nome: 'Bici Rossa',
        peso: 4,
    },
    {
        nome: 'Bici Blu',
        peso: 5,
    },
    {
        nome: 'Bici Verde',
        peso: 2,
    },
    {
        nome: 'Bici Gialla',
        peso: 7,
    },
    {
        nome: 'Bici Fucsia',
        peso: 6,
    },
    {
        nome: 'Bici Nera',
        peso: 9,
    },
    {
        nome: 'Bici Marrone',
        peso: 8,
    },
    {
        nome: 'Bici Arancione',
        peso: 6,
    },
];




// DA "TUTORAGGIO", praticamente era più semplice del previsto 

let minPosition = 0;

for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < bikes[minPosition].peso) {
        minPosition = i;
    }
};

const bike = bikes[minPosition];
const {nome, peso} = bike;

console.log(nome);