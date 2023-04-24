const usuario = {
    nome: "CSL",
    transacoes: [],
    saldo: 0
}
function criarTransacao(transacao){

    usuario.transacoes.push(transacao)

    // Verificar o tipo de transacao
    if (transacao.tipo == "deposito") {
        usuario.saldo = usuario.saldo + transacao.valor
    }else if (transacao.tipo == "saque"){
        usuario.saldo = usuario.saldo - transacao.valor
    }

}

criarTransacao({tipo: 'deposito', valor: 9000})
criarTransacao({tipo: 'saque', valor: 500})

console.log({...usuario, saldo: usuario.saldo.toFixed(2) } );

//extra

function mostrarMaiorTransacaoPorTipo(tipo){
    let maiorValor = 0
    //verificar transações de maior valor
    for (let transacao of usuario.transacoes){
    if (transacao.valor > maiorValor && transacao.tipo == tipo ){
        maiorValor  = transacao.valor
        console.log(transacao.valor);
    }
  }
  return {tipo: tipo, valor: maiorValor}
}
console.log(mostrarMaiorTransacaoPorTipo('saque')); 

function monstrarValorMedioDasTransacoes (){
    //verificar media das transações
    var soma = 0

    for (let transacao of usuario.transacoes){
        soma = soma + transacao.valor

        
    }

    var media = soma / usuario.transacoes.length

    return media.toFixed(2)

  }
  console.log(monstrarValorMedioDasTransacoes());

  function buscarContagemdeTransacoes(){
    let deposito = 0 
    let saque = 0 

    //Verificar quantos depositos e quantos saques houveram

    for (let transacao of usuario.transacoes) {
        if (transacao.tipo == "deposito"){
            deposito = deposito + 1;
        }else if (transacao.tipo == "saque"){
            saque++;
        }
    }
    console.log({deposito, saque}); 
  }
  buscarContagemdeTransacoes();