//IF AND ELSE
//SE E SE NÃO

// let num1 = 10
// let num2 = 20
// if (num>=5 && num2<=10){
//     console.log("Verdadeiro")
// } else{
//     console.log("Falso")
// }

// //switch

// let myExpression ='x'
// switch(myExpression){
//     case 'a:
//         console.log('apertou o a')
//         break
//     case 'b':
//         console.log('apertou o b')
//         break
//     case 'c':
//         console.log('apertou o c')
//         break
//     default:
//         console.log('você apertou outra tecla',myExpression)
//         break
// }
//calculadora
// function calc(num1, operator, num2){
//     let result

//     switch(operator){
//         case "+":
//         result = num1 + num2
//         break
//         case "-":
//         result = num1 - num2
//         break
//         case "/":
//         result = num1 / num2
//         break
//         case "*":
//         result = num1 * num2
//             break
//         default:
//         console.log('não entendi')
//         break
//     }
//     return result
// }
// console.log(calc(8,'*',3))

//throw and try catch

//saber a minha idade
function myAge(myage){
    if(myAge){
        throw 'Você precisa colocar a idade'
}
    console.log('eu executei depois do erro')
}
try{
    myAge(30)
    console.log('Já tratei e deu certo')
} catch(error){
    console.log(error)
}
