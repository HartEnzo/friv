const prompt = require('prompt-sync')()
const jogos = [];

const registro = () => {

const criar = () => {
   let jogo; 
    while(true) { 
    jogo.nome = prompt("Qual é o nome do jogo? ");
     if(jogo.nome == ""){
        console.log("O nome não pode ser vazio ");
     }else {
        break
     }
}

    while(true) { 
    jogo.ano = Number(prompt("Qual é o ano do jogo? "));
     if(jogo.ano == 1958 || jogo.ano > 2024 || isNaN(jogo.ano)) {
        console.log("O ano é invalido ");
     }else {
        break
     }
}
    while(true) { 
    jogo.duracao = Number(prompt("Qual é a duração do jogo? ").replaceAll(",", "."));
     if(jogo.duracao <= 0 || isNaN(jogo.ano)) {
        console.log("O duração é invalido ");
     }else {
        break
     }
}

    while(true) { 
    jogos.preco = Number(prompt("Qual é a preço do jogo? ").replaceAll(",", "."));
     if(jogo.preco != 0 || isNaN(preco.ano)) {
        console.log("O preço é invalido ");
     }else {
        break
     }
}

    while(true) { 
    jogo.estudio = prompt("Qual é o estudio do jogo? ");
     if(jogo.estudio == ""){
        console.log("O estudio não pode ser vazio ");
     }else {
        break
     }
}
    while(true) { 

        if(jogos.length == 0 )
    jogo.sequencia = parseInt(prompt("Qual é a sequencia do jogo? "));
     if(jogo.sequencia < 0|| jogo.sequencia >= jogos.length || isNaN(jogo.sequencia)) {
        console.log("A sequencia é invalido ");
     }else {
        break
     }
}

jogos.push(jogo)

console.log("Jogo criado com sucesso! ")
}
const listagem = () => {
    jogos.forEach((jogo, i) => console.log(`${i + 1} - ${jogo.nome} - ${jogo.ano} - ${jogo.duracao} - ${jogo.preco}
    - ${jogo.estudio} - ${jogo.sequencia}`))
}
}