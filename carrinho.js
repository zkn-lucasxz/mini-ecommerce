// carrinho.js
const meuCarrinho = [];

function adicionarItem(produto, quantidade) {
    const subtotal = produto.preco * quantidade;

    meuCarrinho.push({
        nome: produto.nome,
        quantidade: quantidade,
        subtotal: subtotal
    });
}

function exibirResumo() {
    console.log("\n--- Resumo da Compra ---");
    let totalGeral = 0;
    meuCarrinho.forEach(item => {
        console.log(`${item.quantidade}x ${item.nome} - Subtotal: R$ ${item.subtotal.toFixed(2)}`);
        totalGeral += item.subtotal;
    });
    console.log(`VALOR TOTAL A PAGAR: R$ ${totalGeral.toFixed(2)}`);
}

module.exports = { adicionarItem, exibirResumo };
