const bicycle = [
    {
        nome: 'canyon ultimate',
        peso: 6.7
    },
    {
        nome: 'rose x-lite',
        peso: 6.9
    },
    {
        nome: 'sarto asola',
        peso: 5.7
    },
    {
        nome: 'scott addict',
        peso: 6.85
    },
    {
        nome: 'time alpe',
        peso: 6.2
    }
];


//dichiaro array vuoto
let arr_peso = [];
//ciclo array di oggetti
bicycle.forEach((elem) => {
    //destructuring degli oggetti
    let {peso} = elem;
    //inserisco valori in array vuoto
    arr_peso.push(peso);
});
//confronto valori di array per stabilire il minore
let min = Math.min(...arr_peso);
//filtro array di oggetti
let min_bicycle = bicycle.filter((elem) => {
    if(min == elem.peso){
        console.log(elem);
    }
});



//SNACK 2
const team = [
    {
        name: 'juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'napoli',
        points: 0,
        fouls: 0
    },
    {
        name: 'roma',
        points: 0,
        fouls: 0
    },
];
//ciclo array di oggetti
team.forEach((elem) => {
    //assegno valore randomico a ogni chiave di ogni oggetto
    elem.points = Math.floor((Math.random() * 100) + 1);
    elem.fouls = Math.floor((Math.random() * 100) + 1);
    //ritorno tutto l'oggetto
    return elem;
});

const new_team = [];
team.forEach((elem) => {
    let {name, fouls} = elem;
    let obj = {name, fouls};
    new_team.push(obj);
});
console.log(new_team);
