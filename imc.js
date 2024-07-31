var input = require('readline-sync')
console.log("======== DADOS DO PACIENTE ======== ")
const nome = String(input.question("Digite seu nome:"))
const peso = Number(input.question("Digite seu peso:"))
const altura = Number(input.question("Digite sua altura:"))
const agua = peso * 35
const imc = (peso / (altura * altura)).toFixed(2)
console.log("======== DADOS DO PACIENTE ======== ")
console.log(`Paciente ${nome}, seu peso é de ${peso} kg e altura igual a ${altura} m.`)
console.log(`Seu consumo diário de água é de ${agua} ml.`)
console.log(`Seu IMC é igual a ${imc}`)
if(imc < 18.5){
    console.log("Você está abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Seu peso está normal")
} else if(imc >= 25 && imc <= 29.9){
    console.log("Você está com sobrepeso")
} else if(imc >= 30 && imc <= 34.9){
    console.log("Você está com obsidade grau 1")
} else if(imc >= 35 && imc <= 39.9){
    console.log("Você está com obsidade grau 2")
} else {
    console.log("Você está com obsidade grau 3")
}