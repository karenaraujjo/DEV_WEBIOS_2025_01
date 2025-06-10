var idade
// const ano
//JavaScript
console.log("Hello world") // log serve para apresentar uma mensagem 

console.clear()   // clear vai limpar todas as info na tela

//Variaveis
var numero1 = 192 // Inicializar uma variavel - Signigica já dar um valor
console.log(numero1)

var num1 = 4
var num2 = 4
var resultado = num1 + num2
console.log(resultado)

idade = 89 // Inicar a variável em outra parte do código
console.log(idade)

// ano = 1936
const PI = 3.14

// Textos  - Strings (significa textos) =
// Para inserir textos: var nome = "" ou var nome = ''
var nome = 'Matheus Araujo'
var nome2 = "Matheus Vinicius"
var nome3 = '21032002' // Isto é texto, porque está dentro das aspas
console.log(nome)
console.log(nome2)
console.log(nome3)
console.log(nome, nome2, nome3) // Para inserir todos os nomes de uma vez, uiliza vírgula.

//Pesquisar concatenar

console.log("Olá", + "papai");  // Concatenar 1
console.log("Aluno" + nome + "e Aluno" + nome2 + 'Tem um total de ' + nome3 + "dinheiros") // Concatenar2

//Template String
console.log(`Aluno ${nome} e Aluno ${nome2} Tem um total de ${nome3} dinheiros`) // Concatenar3

//var = Flexível, menos regras (Posso alterar o valor inicial de uma var e recriar a mesma em outras partes do código)

//let = não pode duplicar o nome, mas pode alterar o nome 
// let = Você não pode recriar a mesma em outras partes do código com o mesmo nome, mas pode chamar e alterar o valor inicial

//const= Você não  pode recriar a mesma em outras partes  do codigo e não pode alterar o valor inicial dela garantindo a confiança do dado que esta sendo utilizadp no decorrer do seu código

// Operadores
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)

console.log(5 / 2 * (2 + 3))

// Operadores relacionais
console.log(5 == 5) //Para motrar que é igual: ==
console.log(5 > 5) //Para motrar que é maior: >
console.log(22 < 8) //Para motrar que é menor: <
console.log( 22 <= 22) //Para motrar que é menor ou igual: <=
console.log(22 != 23) //Para motrar que é diferente: !=
console.log('A' == 'A')
console.log(true == false)
console.log(true === true)
console.log(true === 'true') // boolean e o outro e txt > String
console.log(true != false) //true

let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCracha)
console.log(temCamisa == true && temCracha == true) // false e  true 
console.log(temCamisa == true || temCracha == true) //false ou true = true


// Operador de Atribuição
var x = 3
var y = 2
x = x + y
// x += y formato contraido  
// x = 3 + 2
console.log(x)

x = 720
console.log(x)

// log: serve para mostrar resultados, mensagens do sistema
//clear: serve para limpar o console e deixar disponivel para novas mensagens 

console.clear()

console.log("Está tudo limpo")
console.log("Olá mundo")

console.error("Não use essa tela, você pode ser punido por isso.")

console.warn("Mas apresenta uma mensagem em amarelo")