let rl = require('readline-sync')
let opcao = '1';
while (opcao === '1'){
    
    var ano = Number(rl.question("Digite o ano:"));
if( (ano %100 != 0 && ano % 4 == 0) || (ano % 400 == 0)){
    console.log(`O ano ${ano} e bissexto.`);
} else{
    console.log(`O ano ${ano} nao e bissexto.`);
}
    console.log("\nDeseja continuar?");
    console.log("1 - Continuar     2 - Sair");
  opcao = rl.question("Digite a opcao: ");

}

console.log("Voce saiu do programa!")