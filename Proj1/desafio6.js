const usuarios = [
    {
        nome: "Érica",
        tecs: ["HTML" , "CSS"]
    },
    {
        nome: "Yasmin",
        tecs: ["JavaScript" , "PHP"]
    },
    {
        nome: "Garcez",
        tecs: ["Java" , "Pyton", "JavaScript"]
    },
]
function verificarSabeJS(usuario){
    for (let tec of usuario.tecs){
        if (tec == "JavaScript"){
            console.log(`O usuário ${usuario.nome} sabe JavaScript`);
        }
    }
}

for (let usuario of usuarios){
    verificarSabeJS(usuario)
  }

