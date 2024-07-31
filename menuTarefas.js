const readline = require('readline-sync');
let tarefa = [];

function exibirMenu(){
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar uma tarefa:");
    console.log("2 - Lista de tarefas:");
    console.log("3 - Alterar tarefa");
    console.log("4 - Excluir tarefa");
    console.log("5 - Sair do programa");

    let escolha = Number(readline.question("\nDigite uma opcao:"));

    switch(escolha){
        case 1:
            cadastrarTarefa();
            break;
        case 2: 
            listarTarefas();
            break;
        case 3:
            alterarTarefa();
            break;
        case 4:
            excluirTarefa();
            break;
        case 5:
            console.log("Voce saiu do programa!");
            return;
        default:
            console.log("Opcao invalida!");
    }

    exibirMenu();

}

function cadastrarTarefa(){
    let novaTarefa = (readline.question("Digite a nova tarefa:"));
    tarefa.push(novaTarefa);
    console.log(`${novaTarefa} -> tarefa adicionada com sucesso!!`);
}

function listarTarefas(){
    console.log("\n=== LISTA DE TAREFAS === ");
    for (i = 0; i < tarefa.length; i ++){
        console.log(`\n${i + 1}.${tarefa[i]}`)
    }
}
 function alterarTarefa(){
    if(tarefa.length === 0){
        console.log("Nao ha tarefas para alterar!!");
        return;
    }

    listarTarefas();
    let indice = Number(readline.question("Digite o indice da tarefa que deseja alterar:"));
    if (indice < 1 || indice > tarefa.length){
        console.log("indice invalido!");
        return;
    }

    let alterarTarefa = readline.question("Digite a nova tarefa:");
    tarefa[indice - 1] = alterarTarefa;
    console.log(`Tarefa ${indice} alterada!`);
}

function excluirTarefa(){
    if (tarefa.length === 0){
        console.log("Nao ha tarefas para excluir");
        return;
    }
    listarTarefas();
    let indice = Number(readline.question("Digite o indice da tarefa que deseja excluir:"));

    if(indice < 1 || indice > tarefa.length){
        console.log("Indice invalido!");
        return;
    }

    let tarefaRemovida = tarefa.splice(indice - 1, 1);
    console.log(`A tarefa - ${tarefaRemovida} - foi removida com sucesso!`);
}


exibirMenu();