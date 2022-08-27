var add= document.querySelectorAll('.add')
var lanche = document.getElementById('lanche')
var misto = document.getElementById(`misto`)
var bomba = document.getElementById('bomba')
var xtudo = document.getElementById(`x-tudo`)
var xtudoFrango = document.getElementById(`x-tudoFrango`)
var xBrocado = document.getElementById(`x-brocado`)
var bebida = document.getElementById(`heineken`)
var refrigerante = document.getElementById(`refrigerante`)
var suco = document.getElementById(`suco`)
var addCarrinho = document.getElementById('add-carrinho')
var carrinho = document.getElementById('carrinho')
var txtquantidade = document.getElementById('quantidade')
var valor = document.getElementById('valor')
var valorTotal = document.getElementById('valorTotal')
var qtdlanche = document.getElementById('qtd-lanche')
var soma  = 0
var totalLanche = 0

var lanches = [
    {nome: 'Misto Quente', valor: 4.00},
    {nome: 'Bomba', valor: 8.00},
    {nome: 'X tudo', valor: 17.00},
    {nome: 'X tudo de frango', valor: 19.00},
    {nome: 'x brocado', valor: 25.00},
    {nome: 'heineken', valor: 8.00},
    {nome: 'refrigerante', valor: 5.00},
    {nome: 'suco', valor: 6.00},
]

misto.addEventListener(`click`, ()=>{
     valorp= 4.00
    lanche.value = lanches[0].nome
})
bomba.addEventListener('click', () => {
    lanche.value = lanches[1].nome
    valorp= 8.00
})
xtudo.addEventListener(`click`, ()=>{
    lanche.value = lanches[2].nome
    valorp= 17.00
})
xtudoFrango.addEventListener(`click`, ()=>{
    lanche.value = lanches[3].nome
    valorp= 19.00
})
xBrocado.addEventListener(`click`, ()=>{
    lanche.value = lanches[4].nome
    valorp= 25.00
})
bebida.addEventListener('click', ()=> {
    lanche.value = lanches[5].nome
    valorp = 8.00
})
refrigerante.addEventListener('click', () => {
    lanche.value = lanches[6].nome
    valorp = 5.00
})
suco.addEventListener('click', () => {
    lanche.value = lanches[7].nome
    valorp = 6.00
})


addCarrinho.addEventListener('click', ()=>{
    var qtd = Number(qtdlanche.value)
    var opcao = lanche.value
     totalLanche = qtd * valorp
    carrinho.innerHTML += `<p>${opcao} -- ${qtd} -- R$${totalLanche}</p>`
    
    soma += totalLanche
    valorTotal.innerHTML = `<p> ${soma} </p>`
})