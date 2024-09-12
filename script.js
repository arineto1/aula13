function inserir(){
let conteudo = document.querySelector("#conteudo")

let div = document.createElement('div')

conteudo.appendChild(div)

let texto = document.createElement('p')
texto.innerHTML = "Primeiro Texto Exemplo da etec"

div.appendChild(texto)

}

function alterar(){
let todosp = document.querySelectorAll('p')
todosp.forEach(e => e.innerHTML = "2° super info")
}

//remover todos os elementos
function remover(){
conteudo.innerHTML = ''
}
