// produtos.js
const catalogo = []; // Array "privado" ao escopo do módulo

function cadastrarProduto(id, nome, preco) {
    const novoProduto = { id, nome, preco };
    catalogo.push(novoProduto);
}

function listarProdutos() {
    console.log("\n--- Catálogo de Produtos ---");
    catalogo.forEach(p => {
        console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$ ${p.preco.toFixed(2)}`);
    });
}

function buscarProdutoPorId(id) {
    return catalogo.find(p => p.id === id);
}

module.exports = { cadastrarProduto, listarProdutos, buscarProdutoPorId };
