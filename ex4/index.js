import Pessoa from './pessoa'
const pessoa = new Pessoa('Leonaldo')
console.log(pessoa.toString())
// isso vai gerar : bundle.js:8668 Uncaught SyntaxError: Unexpected identifier
// por que o Browser não suporta
// será necessario configurar o babel