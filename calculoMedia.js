var input = require('readline-sync')
const n1 = Number(input.question("Digite a media do bimestre I:"))
const n2 = Number(input.question("Digite a media do bimestre II:"))
const n3 = Number(input.question("Digite a media do bimestre III:"))
const n4 = Number(input.question("Digite a media do bimestre IV:"))
const media = ((n1 + n2 + n3 + n4) / 4).toFixed(2)
if (media >= 7){
    console.log(`Parabéns você foi aprovado com média anual igual a ${media}`)
} else{
    console.log(`Infelizmente você está na recuperação com média anual igua a ${media}`)
}