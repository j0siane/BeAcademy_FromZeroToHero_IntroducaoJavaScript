//Declarar

//Globais - hoisting
//Local-Scope let e const, dentro de um bloco {}

//Objetos


// const human = {
//     name: 'Luan Monteiro',
//     age: 30,
//     weight:90,
//     isAthlete: true,
//     walk: function walking(){
//         console.log('Eu ando bastante!')
//     }
// }

//Objeto

// console.log(human.age)
// console.log(human.name)
// console.log(human.walk())

//concatenar-unir variáveis
// console.log("O humano " + human.name + " tem a idade " + human.age + " anos.")

//interpolação

// console.log(`O humano ${human.name} tem a idade ${human.age}`)

//Array
// const animals = [
// "Elefante",//0
// "Gato",//1
// "Leão",//2
// "Cachorro",//3
// { //4
//     name: "Moacir",
//     age: 2,
//     weight: 4,

// }
// ]

// console.log(animals[4].name)

//Praticando Variáveis

// 1 - Declare uma variável de nome Person

var person

//2 - Que tipo de dado é a variável acima?

//console.log(typeof person)  imprime o tipo, que nesse caso é: undefined

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    *Name: String
    *age: number(integer)
    *weight: Number(float)
    *isAdmin: Boolean
    *isAMan: Boolean
*/
// person = {
//     name : "Joseane",
//     age : 27,
//     weight : 63.5,
//     isAdmin : true,
//     isAMan : false
//}

/* 4. A variável human abaixo é de que tipo de da dados? Object
    4.1 Atribua q ela as mesmas propriedados e valores do exercício 3.
    4.1 Mostre no console a seguinte mensagem:
        O humano <name> tem o peso <weigth> kg.

*/
// let human = {
//     name : `Joseane`,
//     age : 27,
//     weight : 63,
//     isAdmin : true,
//     isAMan : false

// }
// console.log(`O humano ${human.name} tem o peso ${human.weight} kg.`)

/*5- Declare uma variavel do tipo array de nome humans
     e atribua a ela nenhum valor, ou seja, array vazio.
*/

// let humans = []

/* 6- Retribua valor para a variavel acima, colocando dentro dela o objeto
human da questão 4. não copiar e colar o bjeto, mas usar o objeto criado, inserir ele no array.
*/
// humans=[
//     human
// ]
// console.log(humans)

/* 7- Coloque no console o valor da posição zero do array acima*/

// console.log(human[0].name)

/* 8 - Crie um novo objeto human e coloque na posição 1 do array Humans */

// let = newHuman {
//     name : "Luan Monteiro",
//     age: 30,
//     weight: 90.1,
//     isAdmin: true,
//     isMan: true
// }

// humans = [
//     human,
//     newHuman
// ]

// console.log(humans)
//ou humans[1] = newHuman

/* 9- Sem rodar o código, resposta o resultado da sída abaixo:
    a) 
    console.log(a)
    var a = 1
    Resposta= undefined

    b)
    let a
    console.log(a)
    {
       let a = 2
        console.log(a)
    }
    console.log(a)

    resposta: undefinded 2 undefined
    c)
    console.log(b)
    {
        let b = 3
        console.log(b)
    }
    console.log(b)
    resposta:  3 

    d)
    const c =10
    {
        console.log(c)
        const c = 20
        console.log(c)
    }
    resposta const não dá para trocar o valor*/