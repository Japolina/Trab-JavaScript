const dados = {
    nome: "Matheuszinho",
    idade: 20,
    tecs:[
        {
            nome: "JavaScript", 
            especialidade: "Web/Mobile"
        },
        {
            nome: "Pyton", 
            especialidade: "Data Scienec"
        }
    ]
}

console.log(`O programador(a) ${dados.nome} tem ${dados.idade} anos 
e trabalha com a tecnologia ${dados.tecs[0].nome}, com especialidade ${dados.tecs[0].especialidade}`)