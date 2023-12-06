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
})