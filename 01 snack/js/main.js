const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];


const nuovaListaOgg = vips.map((vip, numTavolo) => {

    let nuovoOggetto = {
        nomeTavolo: `TAvolo Vip`,
        vip: vip,
        numTavolo: numTavolo + 1.
    };

    return nuovoOggetto;
});

console.log(nuovaListaOgg);