//Exemplo

//Method

// function myFirstFunction(){
//     //Entra meu codigo
//     console.log("Olhaaa a funcao!")
// }

//Execute
// myFirstFunction()

//Funcao com parametros e argumentos
// function sum(number1, number2){
//     console.log(number1+number2)
// }
// sum(32,24)

// //funcao com return

// function myFirstFunctionWithReturn(num1, num2){
//         let total = num1 + num2
//         return total

// }
//total=??
// console.log(myFirstFunctionWithReturn(20,20))

// //Restaurante
// function MeuPratoDeComida(comida1, comida2, comida3, comida4){
//     return `Meu prato de comida é:${comida1},${comida2},${comida3},${comida4}`
// }
// const prato = MeuPratoDeComida('arroz','feijão','bife','batata frita')
// console.log(prato)

// //Arrow Function
// const myFirstArrowFunction = (number1, number2) =>{
//     let total = number1 + number2
//     return total;
// }
// const result = myFirstArrowFunction(20,20)
// console.log(result)













// //Função anônima
// (function () {
//     console.log('Paylivre s2')
// })()//autoexecução

// setTimeout(function() => {
//     console.lpg('Vou levar 3 segundos para ser executado')
// }, 3000);//3s

//parte 1
// let assunto

// function criarAssunto(assunto){
//     return assunto
// }
// console.log(criarAssunto(assunto));

//parte 2
// let assunto= 'Estudar' //var=valor

// function criarAssunto(assunto){
//     return assunto
// }
// console.group(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); //resposta =>'estudar'

//parte 3
// let assunto= 'Estudar' //var=valor

// function criarAssunto(assunto){
//     assunto='Escutar musica' //mudança de valor

//     return assunto
// }
// console.group(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); //resposta =>'escutar musica'

//parte 4
// let assunto= 'Estudar' //var=valor

// function criarAssunto(){ //sem parametro
//     assunto='Escutar musica' //mudança de valor

//     return assunto
// }
// console.group(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); //resposta =>'escutar musica'

//Hoisting
// digaMinhaIdade()

// function digaMinhaIdade(){
//     return console.log(30)
// }

//Callback

// function minhaFuncao (callbaack){
//     console.log('Inicio da Minha função')


//     callbaack(15,15)

//     console.log('Final da minha função')
// }

// minhaFuncao(
//     (num1, num2) =>{
//         return console.log(num1 + num2)
//     }
// )

//Function Construct

function Sum(){
    this.nun1,
    this.num2,
    this.calc = function(num1,num2){
        return total=num1+num2
    }
}
const math = new Sum()
const num1 = math.num1 = 24
const num1 = math.num2 = 50

console.log(num1)
console.log(num2)
console.log(math.calc(naum1, num2))