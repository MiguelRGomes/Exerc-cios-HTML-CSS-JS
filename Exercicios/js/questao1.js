
let questao = () =>{// iniciar as variaveis e vetores
    let nome = []
    let ponto = []
    let totalPontos = 0
    let vet = []
    let maiorPonto = 0
    let nomeJogador
    // coleta de dados
    for (let i = 0; i < 3; i++) {
        nome.push((prompt(`nome ${i}`)))
        ponto.push(Number(prompt(`Ponto ${i}`)))
        totalPontos = totalPontos  + ponto[i]  
        if (maiorPonto < ponto[i]){ // analisando o maior ponto
            maiorPonto = ponto[i]
            nomeJogador = nome[i]
        }
        if (ponto %2==0) {
            vet = nome[i] // descobrindo o jogador que fez pontos pares 
        }
    }
    // mostrando os resultados
    let media = totalPontos / 3
    alert(`media de pontos ${media}`)
    alert(`jogador com mais pontos${nomeJogador}${maiorPonto}`)
    alert(`jogadores que fizeram com pontos par ${vet}`)
}