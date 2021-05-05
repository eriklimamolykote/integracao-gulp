// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/ 
import Vendavel from './vendavel'

export default class Livro implements Vendavel {
    constructor(public nome: string,
        public readonly preco: number,
        public readonly desconto: number) {

    }

    precoComDesconto() {
        return this.preco * (1 - this.desconto)
    }
}