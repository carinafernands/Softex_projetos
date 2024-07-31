var input = require('readline-sync')
console.log(" ====== TIPOS DE QUARTO ======")
console.log("Standard - R$ 150")
console.log("Luxo - R$ 300")
console.log("Suite - R$ 500")
const numDiaria = Number(input.question("Digite a quantidade de diarias: "))
const quarto = String(input.question("Digite o tipo de quarto:"))

if (quarto === "standard"){
    valorDiaria = 150.00;
} else if (quarto === "luxo"){
    valorDiaria = 300.00;
} else if (quarto === "suite"){
    valorDiaria = 500.00;
} else {
    console.log("Tipo de quarto inválido")
}

const estadia = (valorDiaria * numDiaria).toFixed(2)
console.log(`O valor para o quarto ${quarto} com ${numDiaria} diarias é de R$ ${estadia}`)