const clientes = [
    {
        nome: "Érica",
        receita: 2000,
        despesas: 5000,
        saldo: 0
    },
    {
        nome: "Yasmin",
        receita: 2500,
        despesas: 1800,
        saldo: 0
    },
    {
        nome: "Matheus",
        receita: 7000,
        despesas: 7000,
        saldo: 0
    }
]
function calcularSaldo(cliente){
    let receita = cliente.receita;
    let despesas = cliente.despesas;

    let saldo = receita - despesas;
    
    return saldo;
}

for (let cliente of clientes){
    cliente.saldo = calcularSaldo(cliente)

    if (cliente.saldo> 0 ){
        console.log(`O cliente ${cliente.nome} possui saldo POSITIVO de 
        ${cliente.saldo}`);
    }else if (cliente.saldo <0 ){
        console.log(`O cliente ${cliente.nome} possui saldo NEGATIVO de 
        ${cliente.saldo}`);
    }else { 
        console.log(`O cliente ${cliente.nome} não possui saldo`)
    }
}