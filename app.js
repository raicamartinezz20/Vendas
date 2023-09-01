
var calculoValor = require('./modulo/calcular.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor do produto: ', function (valorProduto) {
    let preco = valorProduto.replace(",", ".")

    entradaDados.question('Insira o código: ', function (codigoInserido){
        let codigo = codigoInserido

        if (preco == '' || codigo == ''){
            console.log('ERRO: Informe um código.')
        } else if (isNaN(codigo) || isNaN(preco)) {
       
        console.log('ERRO: é obrigatório informar somente números.')
        } else if (codigo > 4 || codigo < 1){
            console.log('ERRO: é obrigatório inserir um código de 1 a 4.')
        } else {
            preco = Number(preco)
            codigo = Number(codigo)

            msg = calculoValor.calcular(preco, codigo)
            console.log(msg)
        }
        
    })
})