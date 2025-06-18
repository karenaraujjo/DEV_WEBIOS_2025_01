// window.setTimeout(mensagem, 5000 )

// window.prompt('Digite um número de 1 até 10') - Mostra a mensagem e coloca a opção de digitar
// window.alert('Olá mundo') - Mensagem de alerta 
// window.confirm("Olá mundo") - Precisa confirmar a mensagem 
// window.open() - Abre a página
// window.close() - Fecha a página

// window.setTimeout() - Nome da função, tempo para chama a função
//  1s = 1000 mil mile segundos / 2s = 2500

// Function = Ações que o código pode executar quando for solicitado pelo usuario no navegador
function Mensagem(){
    alert("Aprendendo DOM com o JS") //Aparece essa mensagem
    alert(Date()) // Aparece o dia, mês, ano, segundo, localização
}



let tagH1 = document.createElement("h1")
//innerHTML = Serve para adicionar uma informação dentro das tags do HTML
tagH1.innerHTML = "Olá mundo, criei você"
// A quem ela vai pertencer 
document.body.appendChild(tagH1)