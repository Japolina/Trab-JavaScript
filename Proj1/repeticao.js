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
        tecs: ["Java" , "Pyton"]
    },
]

for (let usuario of usuarios) {
    console.log(`o usuário ${usuario.nome} trabalha com a(s) tecnologias
    ${usuario.tecs}`)
}