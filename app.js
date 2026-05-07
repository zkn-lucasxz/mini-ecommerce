// app.js
const prompt = require('prompt-sync')();
const { isNumeroValido, isTextoValido } = require('./validacoes');
const { cadastrarProduto, listarProdutos, buscarProdutoPorId } = require('./produtos');
const { adicionarItem, exibirResumo } = require('./carrinho');

let continuar = true;

while (continuar) {
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("[1] Cadastrar Produto");
    console.log("[2] Ver Catálogo");
    console.log("[3] Adicionar ao Carrinho");
    console.log("[4] Ver Resumo da Compra");
    console.log("[0] Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            let id, nome, preco;
            
            // Validação de ID
            do {
                id = Number(prompt("Digite o ID do produto: "));
                if (!isNumeroValido(id)) console.log("ID inválido!");
            } while (!isNumeroValido(id));

            // Validação de Nome
            do {
                nome = prompt("Digite o nome do produto: ");
                if (!isTextoValido(nome)) console.log("Nome não pode ser vazio!");
            } while (!isTextoValido(nome));

            // Validação de Preço
            do {
                preco = Number(prompt("Digite o preço: "));
                if (!isNumeroValido(preco)) console.log("Preço inválido!");
            } while (!isNumeroValido(preco));

            cadastrarProduto(id, nome, preco);
            console.log("Produto cadastrado com sucesso!");
            break;

        case '2':
            listarProdutos();
            break;

        case '3':
                const idBusca = Number(prompt("Digite o ID do produto que deseja comprar: "));
                const produtoEncontrado = buscarProdutoPorId(idBusca);
    
                if (produtoEncontrado) {
                    const qtd = Number(prompt("Quantidade: "));
 
                    if (isNumeroValido(qtd)) {
                        adicionarItem(produtoEncontrado, qtd); 
                        console.log("Item adicionado ao carrinho!");
                    } else {
                        console.log("Quantidade inválida.");
                    }
                } else {
                    console.log("Produto não encontrado no catálogo.");
                }
                break;
    
         case '4':
            exibirResumo();
            break;

        case '0':
            continuar = false;
            console.log("Encerrando sistema...");
            break;

        default:
            console.log("Opção inválida.");
    }
}