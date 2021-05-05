// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/ 
export default interface Vendavel {
    nome: string
    preco: number
    desconto: number
    precoComDesconto(): number
}