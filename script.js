// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'miguel',
  sobrenome: 'sanglard',
 nomecompleto(nomes) {
 return this.nome + this.sobrenome;
 }}
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dados.nomecompleto())
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco)
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
 raca: 'labrador',
 cor: 'preto',
 idade: 10,
 latir(pessoa){
  if(pessoa === 'homem'){
     return "au au"
  }else { return "Não irei latir pois você não é um homem, ninguém acreditará em você se contar ha alguém de meia volta e finja que nada aconteceu." }
 }
}

