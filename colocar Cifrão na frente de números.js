window.alert('Você tem R$5,00 na sua conta')
var dinheiro1 = Number(
  window.prompt('Quanto você deseja adicionar à sua conta?')
)
var soma = 100 + dinheiro1
soma
document.write(
  `Agora você tem ${soma.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })} na sua conta!`
)
