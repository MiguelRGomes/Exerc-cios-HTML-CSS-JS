let exercicio0 = function(){
    let vet = [] // declaração do vetor
    // entrada de dados
    for(let i=0; i<5; i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    // processamento
    for(let i=0; i<5; i++){
        vet[i] = vet[i] + 10
    }
    console.log(vet) // o comando console.log() identifica o vetor e mostra os elementos
}

let exercicio1 = function(){
    let vet = [] // declaração do vetor
    // entrada de dados
    for(let i=0; i<6; i++){
        vet.push(Number(prompt(`informe o número ${i+1}`)))
    }
    // processamento
    let pares = [] // vetor contem os valores pares
    let impares = [] // vetor contem os valores impares
    for(let i=0; i<6; i++){ // para cada elemento do vetor
        if( vet[i] % 2 == 0){ // verifico se o elemento é par
            pares.push(vet[i]) // insere o elemento par no vetor pares
        }
        else {
            impares.push(vet[i])
        }
    }
    console.log(`Os valores pares são ${pares} e a qtde deles é ${pares.length}`)
    console.log(`Os valores pares são ${impares} e a qtde deles é ${impares.length}`)
}

let exercicio2 = function(){
    let vet = []
    let mult2 = []
    let mult3 = []
    let mult = []

    for(let i=0; i<7; i++){
        vet.push(Number(prompt(`informe o número ${i+1}`)))
    }
    for(let i=0; i<7; i++){
        if(vet[i] % 2 == 0){
            mult2.push(vet[i])
        }
        else if (vet[i] % 3 == 0){
            mult3.push(vet[i])
        }
    }
    for(let i=0; i<7; i++){
        if(vet[i] % 2 == 0 && vet[i] % 3 == 0) {
            mult.push(vet[i])
        }
    }
    console.log(`Os multiplos de 2 são ${mult2}`)
    console.log(`Os multiplos de 3 são ${mult3}`)
    console.log(`Os multiplos de 2 e 3 são ${mult}`)
}

// up na empregabilidade
// => arrow function ou função em seta
// ecma script 6 - ES6 (troque a palavra function por uma saida)
let exercicio4 = () => {

    let vet = [] // criamos
    // entrada de dados
    for (let i=0; i<15;i++){ // i começa com 0
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    // processamento
    let posicao30 = []
    for(let i=0;i<15; i++){
        if(vet[i] == 30)
            posicao30.push(i) // guarda a posição i e não o 30 - vet[i]
    }
    console.log(`As posições onde aparece o número 30 são ${posicao30}`)
}
// arrow function - função com seta
let exercicio5 = () => {
    let logica = []
    let linguagem = []

    for (let i=0;i<15;i++){
        logica.push(Number(prompt(`Informe o número do aluno ${i+1} matriculado na disciplina de lógica`)))
    }
    for(let j=0;j<10;j++){
        linguagem.push(Number(prompt(`Informe o número do aluno ${j+1} matriculado na disciplina de linguagem`)))
    }

    // intersecção
    let interseccao = []
    for(let i=0;i<15;i++){ // para cada elemento do vetor lógica
        for(let j=0;j<10;j++){ // para cada elemento do vetor linguagem
            if (logica[i] == linguagem[j]){
                interseccao.push(logica[i])
            }
        }
    }
    console.log(`Os alunos que fazem tanto a disciplina lógica como linguagem são ${interseccao}`)
}

let exercicio3 = () => {

    let vet1 = []
    let vet2 = []
    for (let i=0; i<10;i++){ // i começa com 0
        vet1.push(prompt(`Informe o código do produto`))
        vet2.push(Number(prompt(`Informe a quantidade do produto ${vet1[i]} em estoque`)))
    }
    // faremos as compras
    let codigoCliente = Number(prompt(`Informe o código do cliente`))
    do {
        // pede códido para compra
        let codigo = prompt(`Informe o código do produto para compra`)
        let achou = false // variavel booleana
        // verifica se o código existe
        for(let i=0;i<10;i++){
            if (vet[i] == codigo){
                achou = true
                // se existe, pede quantidade para comprar
                let qtde = Number(prompt(`Informe a quantidade para compra`))
                if (qtde <= vet2[i]){
                    // se tem em estoque, atuzalizá-o
                    vet2[i] = vet2[i] - qtde
                }
                else {
                    alert(`Infelizmente não temos o produto em estoque`)
                }
            }
        }
        if (achou == false){
            alert(`Infelizmente não temos o produto`)
        }
        codigoCliente = Number(prompt(`Informe o código do cliente para a próxima compra. Informe 0 para encerrar`))

    }
    while (codigoCliente != 0)

    console.log(`O valor do estoque é ${vet2}`)
    
}

let exercicio6 = () => {
    let comi = []
    let vendas = []
    let nomes = []

    for (let i=0; i<10;i++){ // i começa com 0
        nomes.push(CharacterData(prompt(`Informe o nome do vendedor`)))
        vendas.push(Number(prompt(`Informe o total de vendas do  `)))
        comi.push(Number(prompt(`Informe a comissão de vendas do `)))
        
    }

    maior = 0.0 
    pos1 = 0
    for (let i=0; i<10;i++){
        if (vendas > maior){
            maior = v[i] * ((comi[i]/100)+1)
            pos1 = i 
        }
    }

    menor = 9999.9
    pos2 = 0
    for (let i=0; i<10;i++){
        if (vendas < menor){
            menor = v[i] * ((comi[i]/100)+1)
            pos2 = i 
        }
    }


}
