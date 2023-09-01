function calcular(valorProduto, codigoInserido) {
    let preco = valorProduto
    let codigo = codigoInserido
    let valorAtt
    let msg

    switch (codigo) {
        case 1:
            valorAtt = preco - (100 * 0.08)
            msg = preco + ' à vista, com desconto de 8% sairá por ' + valorAtt
            break

        case 2:
            valorAtt = preco - (100 * 0.04)
            msg = preco + ' à vista no cartão, com desconto de 4% sairá por ' + valorAtt
            break 
            
        case 3:
            valorAtt = preco / 2
            msg = preco + ' em 2x sem juros, cada parcela sairá por ' + valorAtt
            break

        case 4:
            valorAtt = preco / 4 + (100 * 0.08)
            msg = preco + ' em 4x com juros de 8%, cada parcela sairá por ' + valorAtt
            break
    
        default:
            break;
    }

    return msg

}

module.exports={
    calcular
}