const prompt = require("prompt-sync")({ sigint: true });

var jogos = [];

for (let jogo = 0; jogo < 7; jogos++){

    jogos.push(prompt(`Digite o ${jogo}º jogo: `))
    

}

console.log(jogos);