const prompt = require ("prompt-sync")({ sigint: true});

const nome = prompt("Digite seu nome: ")
const idade = prompt("Digite sua idade: ")


function verificaridade(idade){
    if (idade >= 18){
        console.log(`Maior de idade`)
    }else {
        console.log(`Menor de idade`);
    }
}
verificaridade(idade)
