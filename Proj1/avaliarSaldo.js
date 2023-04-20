const clientes = [
    {nome: "Érica",
    saldo: 200
    },
    {
        nome: "Matheus",
        saldo: -900
    },
    {
        nome: "Henrique",
        saldo: 0
    }
]
for (let cliente of clientes){
if (cliente.saldo > 0){
    console.log(`O cliente ${cliente.nome} possui saldo positivo
    de ${cliente.saldo}`)

} else if (cliente.saldo < 0) {
    console.log(`O cliente ${cliente.nome} possui saldo negativo
    de ${cliente.saldo}`)

} else {
    console.log(`O cliente ${cliente.nome} não possui saldo`)
}
}



