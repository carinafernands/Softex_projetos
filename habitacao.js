const rl = require('readline-sync');

let org = [];
let hab = [];

function exibirMenu() {
    console.log(`====== MENU ======\n
1 - Cadastrar organização:
2 - Listar organizações:
3 - Alterar organização:
4 - Excluir organização:
5 - Adicionar nova habitação:
6 - Listar habitações:
7 - Excluir habitação:
8 - Sair do programa\n`);

let opcao = Number(rl.question("Digite uma opcao:\n"));

switch(opcao){
    case 1:
        cadastrarOrg();
        break;
    case 2: 
        listarOrg(); 
        break;
    case 3: 
        alterarOrg();
        break;
    case 4: 
        excluirOrg();
        break;
    case 5:
        cadastrarHab();
        break;
    case 6:
        listarHab();
        break;
    case 7:
        excluirHab();
    case 8:
        console.log("Voce saiu do programa!!");
        return;
    default:
        console.log("Opcao invalida!");
    }
    exibirMenu();
}
    

// organizacao

function cadastrarOrg(){
    console.log("------ REGISTRO DE ORGANIZACAO: ------ \n ")
    let nome = (rl.question("Digite o nome da organizacao:"));
    let cnpj;
    while(true){
        cnpj = (rl.question("Digite o CNPJ da organizacao:"));
        if(/^\d{14}$/.test(cnpj)){ // garantir que o CNPJ digitado tenha 14 caracteres
            break;
        } else{
            console.log("CNPJ inválido!")
        }
    } 
    let responsavel = (rl.question("Digite o nome do tecnico responsavel:"));

    org.push([nome, cnpj, responsavel]);
    console.log(`- Organicao: ${nome}\n - CNPJ: ${cnpj}\n - Téc. Responsavel: ${responsavel}\n
    adicionada com sucesso!!`);
}

function listarOrg(){
    console.log("------ LISTA DE ORGANIZACOES ------\n");
    if(org.length === 0){
        console.log("Nao ha organizacoes registradas!!");
    }
    for (i = 0; i < org.length; i++){
        console.log(`${i + 1} -> ${org[i]}`)
    }
}

function alterarOrg(){
    if (org.length === 0){
        console.log("Nao ha organizacoes cadastradas!");
        return;
    }

    listarOrg();
    let indice = Number(rl.question("Digite o indice da org que deseja alterar:"));
    
    if (indice < 1 || indice > org.length){
        console.log("Indice invalido!!");
        return;
    }

    let alterarOrg = rl.question("Digite o novo nome da organizacao:");
    org[indice - 1] = alterarOrg;
    console.log(`Organizacao ${indice} alterada!`);
}

function excluirOrg(){
    if(org.length === 0){
        console.log("Nao ha organizacoes para excluir!");
        return;
    }

    listarOrg();
    let indice = Number(rl.question("Digite o indice da org que deseja excluir:"));

    if(indice < 1 || indice > org.length){
        console.log("indice invalido!");
        return;
    }

    let orgRemovida = org.splice(indice - 1, 1);
    console.log(`A organização ${orgRemovida} - foi removida com sucesso!`)

    exibirMenu();
}

// habitacao

function cadastrarHab(){
    listarOrg();
    if (org.length === 0){
        console.log("Nao ha organizacoes!");
        return;
    }

    let indiceOrg = Number(rl.question("Digite o indice da organizacao:"));

    if (indiceOrg < 1 || indiceOrg > org.length){
        console.log("Indice da organizacao invalido!");
        return;
    }
    console.log("------ REGISTRO DE HABITACOES ------\n")
    let nomeHab = rl.question("Digite o nome da nova hab:");
    let tamanhoHab = rl.question("Digite o tamanho da hab(m²):");
    console.log("Escolha o status da hab:\n 1 - Planejamento\n 2 - Construcao\n 3 - Concluida");
    let status = [];
    let statusOpcao = Number(rl.question("Digite o status da habitacao:"));
    switch(statusOpcao){
        case 1:
            status = "Planejamento";
            break;
        case 2: 
            status = "Construcao";
            break;
        case 3:
            status = "Concluida";
            break;
        default:
            console.log("Não especificado!");
            break;
    }

    hab.push({organizacao: org[indiceOrg - 1], habitacao: [nomeHab, tamanhoHab, status]});
    console.log(`Habitacao ${nomeHab, tamanhoHab, status} - Organizacao: ${org[indiceOrg - 1]}!`);
   
}

function listarHab(){
    console.log("------ LISTA DE HABITACOES ------\n");
    if(hab.length === 0){           
        console.log("Nao existe habitacoes registradas!!")
    }
    
    for (i = 0; i < hab.length; i++){
        console.log(`${i + 1} -> Habitacao: ${hab[i].habitacao}, Organizacao: ${hab[i].organizacao}`);
    }
}

function excluirHab(){
    if(hab.length === 0){
        console.log("Nao ha habitacoes para excluir");
        return;
    }

    listarHab();
    let indice = Number(rl.question("Digite o indice da hab que deseja excluir:"));
    if (indice < 1 || indice > hab.length){
        console.log("Indice invalido");
        return;
    }

    let habExcluida = hab.splice(indice - 1, 1);
    console.log(`Habitacao: ${habExcluida[0].habitacao} da Org: ${habExcluida[0].organizacao} foi removida com sucesso!`);

    exibirMenu();
}


exibirMenu();