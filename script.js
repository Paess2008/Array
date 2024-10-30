//var, let e const = variaveis
//Varivel serve para armazenar informacões

let nome = "Pedro"
//String é um tipo de dado textual
//console.log(nome);

//array [] colchetes
//array lista é uma variavel especial onde podemos armazenar uma lista de dados.

let compras = [
    
];

//No array temos um indice, vai iniciar do numero 0
//console.log(compras)//mostra toda a lista

//console.log(compras[5])//Perfumes

//numero é do tipo number
let numeros = [1, 2, 3, 4, 5]
console.log(numeros);

//metodos de array
//forma de manipular dados 

//adcionando numero 6 no array:
numeros.push(6)
//push() adciona/empurra no final do array

//adcionando o numero 0 no inicio:
numeros.unshift(0)
//Adcionar ao inicio do array

numeros.pop();
//vai remover o ultimo item do array

console.log(numeros.join("-"))
//exibe todo array separado por -

