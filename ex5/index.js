const produto = {
    nome: 'Camiseta Dahora',
    preco: 40.00,
    desconto: 0.00
}
function clone(objeto) {
    return { ...objeto }
}
const novoProduto = clone(produto)
novoProduto.nome = 'Camiseta Furada';
novoProduto.preco = 0.01;
console.log(produto, novoProduto)