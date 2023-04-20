const pessoa = {
    nome: "Érica",
    genero: "F",
    idade: 50,
    anos_contribuicao: 40
}
const somaIdadeContrib = pessoa.idade + pessoa.anos_contribuicao

//Estrutura condicional
if (pessoa.genero = 'M'){
    if (pessoa.idade >= 35 && 
        pessoa.somaIdadeContrib <= 95){
            console.log("Pode se aposentar.")
        }else {
            console.log ("Não pode se aposentar.")
        }
}else if (pessoa.genero = 'F') {
    if (pessoa.idade >= 30 && 
        pessoa.somaIdadeContrib <= 85){
            console.log("Pode se aposentar.")
        }else {
            console.log ("Não pode se aposentar.")
        }
    }
