const readline = require("readline-sync")

let eleitores = parseInt(readline.question("Digite a quantidade de eleitores: "));

let candA = 0;
let candB = 0;
let candC = 0;
let candidatosSeguntoTurno = [];

function segundoTurno(){
    let maiorVotos = Math.max(candA, candB, candC);
    
    if(candA === maiorVotos && candA === candB){
        candidatosSeguntoTurno.push("Candidato A x Candidato B");
    }else if(candA === maiorVotos && candC === candA){
        candidatosSeguntoTurno.push("Candidato A x Candidato C");
    }else if(candC === maiorVotos && candC === candB){
        candidatosSeguntoTurno.push("Candidato B x Candidato C");
    }
   
    console.log(`Candidatos para segundo turno: ${candidatosSeguntoTurno}`);
   }

   function votacaoSegundo(){
    let candA = 0;
    let candB = 0;
    let opcao = candidatosSeguntoTurno.shift(); //ler o array
    
    for (let index = 0; index < eleitores; index ++){
        console.log(`\nEleitor ${index + 1}`);
        console.log(opcao); // mostra no console o array
        console.log("[1]", opcao, "[2]");


        let voto = parseInt(readline.question(`Digite sua opcao:`));
        if (voto === 1){
            candA++;
        } else if (voto === 2){
            candB++;
        }else{
            console.log("Voto nulo!")
        }
    }
    console.log("Resultado do segundo turno:");
    console.log(`Candidato 1 = ${candA}\nCandidato 2 = ${candB}`)
    totalVotos = candA + candB;
    let percentualA = ((candA / totalVotos) * 100).toFixed(0);
    let percentualB = ((candB / totalVotos) * 100).toFixed(0);

    if(percentualA > 50){
        console.log(`O candidato 1 venceu o segundo turno com ${percentualA}%`)
    }else if(percentualB > 50){
        console.log(`O candidato 2 venceu o segundo turno com ${percentualB}%`)
    }else{
        console.log("Resultado invalido!!")
    }

   }

for (let index = 0; index < eleitores; index ++){
    console.log(`\nEleitor ${index + 1}`);
    let voto = parseInt(readline.question("\n[1] Candidato A \n[2] Candidato B \n[3] Candidato C \nDigite sua opcao:" ));

    if (voto === 1){
        candA++;
    } else if (voto === 2){
        candB++;
    } else if(voto === 3){
        candC++;
    }else{
        console.log("Voto nulo!")
    }
}

// verificar o resultado 
console.log("\nRESULTADO DAS ELEICOES");
console.log(`Candidato A = ${candA} \nCandidato B = ${candB} \nCandidato C = ${candC}`);

let total = candA + candB + candC;
let percentualA = ((candA / total) * 100).toFixed(0);
let percentualB = ((candB / total) * 100).toFixed(0);
let percentualC = ((candC / total) * 100).toFixed(0);

if(percentualA > 50){
    console.log(`\nO candidato A venceu com ${percentualA}%!`);    
}else if(percentualB > 50){
    console.log(`\nO candidato B venceu com ${percentualB}%`);
}else if(percentualC > 50){
    console.log(`\nO candidato C venceu com ${percentualC}%`);
}else{
    console.log("Havera segundo turno!");
    segundoTurno();
    votacaoSegundo();
}
return;