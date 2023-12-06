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
let view_bicycle = document.getElementById('bicycle');
let min_bicycle = bicycle.filter((elem) => {
    if(min == elem.peso){
        console.log(elem);
        let h2 = document.createElement('h2');
        h2.innerText += `${elem.nome} ${elem.peso}`;
        view_bicycle.appendChild(h2);
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

let view_team = document.getElementById('team');
let ul = document.createElement('ul');
ul.classList.add('list-unstyled');
view_team.appendChild(ul);

const new_team = [];
team.forEach((elem) => {
    let {name, fouls} = elem;
    let obj = {name, fouls};
    new_team.push(obj);
    ul.innerHTML += `<li>${name} falli subiti: ${fouls}</li>`;
});
console.log(new_team);


//BONUS 1
const article = [
    {
        name: 'Poppy',
        type: 't-shirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
];

let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let view_article = document.getElementById('article');


let new_article = [];
article.forEach((elem) => {
    elem.position = alfabeto[Math.floor((Math.random() * alfabeto.length))];
    new_article.push(elem);

    let card = document.createElement('div');
    card.classList.add('card');
    view_article.appendChild(card);
    card.innerHTML += `<h1 class="text-center">${elem.position}</h1>
    <h2>${elem.name}</h2>
    <p>${elem.type}</p>
    <p>${elem.color}</p>`
});
console.log(new_article);

//BONUS 2
