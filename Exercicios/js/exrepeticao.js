function exercicio0(){
    let soma = 0 // valor que neutraliza a soma (0 não atrapalha a soma)

    let i = 1

    while (i <= 10){

        let nota = Number(prompt(`Informe a nota`)) // document.getElementById("nota").value

        soma = soma + nota

        i++
    }
    let media = soma / 10
    alert(`A média das notas é ${media}`)
}

function exercicio1(){

    let a, b, c, d, aux

    let contador = 1

    while (contador <= 5) {
        a = Number(prompt(`Informe o valor de a`))
        b = Number(prompt(`Informe o valor de b`))
        c = Number(prompt(`Informe o valor de c`))
        d = Number(prompt(`Informe o valor de d`))
        let i = 1
        while (i <=3 ){ // Bubble Sort
            if (a > b){ // troca a com b
                aux = a
                a = b
                b = aux
            }
            if (b > c){ // troca b com c
                aux = b
                b = c
                c = aux
            }
            if (c > d){ // troca c com d
                aux = c
                c = d
                d = aux
            }
            i++
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d} e a ordem decrescente ${d} ${c} ${b} ${a}`)
        contador++
    }
}



function exercicio2(){

    let qtde = 120
    let lucro
    let saida = "" // variável acumuladora
    let maiorLucro = 0 // valor bem pequeno
    let maiorQtde = 0 // qtde que me dá maior lucro
    let maiorPreco = 0 // preço que me dá maior lucro
    for(let preco = 5.0; preco >= 1.0; preco = preco - 0.50){

        lucro = (preco * qtde) - 200
        if (lucro > maiorLucro){ // encontramos um lucro maior que maiorLucro
            maiorLucro = lucro
            maiorQtde = qtde
            maiorPreco = preco
        }
        saida = saida + `<tr> <td> R$ ${preco.toFixed(2)} </td>  <td> ${qtde} </td> <td> R$ 200.00 </td> <td> R$ ${lucro.toFixed(2)} </td> </tr>`
        // prepara para a próxima vez
        qtde = qtde + 26
    }
    document.getElementById("corpo").innerHTML = saida
    alert(`Maior lucro ${maiorLucro} com qtde ${maiorQtde} com preço ${maiorPreco}`)
    
}

function exercicio3(){
    // entrada de dados
    let i = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    while (i <=8 ){
        let idade = Number(prompt(`Informe a idade ${i}`))
        if (idade <= 15){
            f1++
        }
        else if ((idade > 15) && (idade <= 30)){
            f2++    
        }
        else if ((idade > 30) && (idade <= 45)){
            f3++
        }
        else if ((idade > 45 ) && (idade <= 60)){
            f4++
        }
        else { // > 60
            f5++
        }
        i++ // o i precisa ser incrementado
    }
    // crase vc utiliza no template string `texto ${variável}`
    // aspas simples utiliza para comparar caracter: if (sexo == 'M')
    alert(`Faixa 1 ${f1} \nFaixa 2 ${f2} \nFaixa 3 ${f3} \nFaixa 4 ${f4} \nFaixa 5 ${f5} \n% F1 ${f1/8*100} \n% F5 ${f5/8*100}`)
}

function exercicio6(){


    document.getElementById("corpo").innerHTML = ""
    let valor // valor é definido pelo usuário
    let tipo // valor é definido pelo usuário
    let totalPrazo = 0 // valor serão acumulados
    let totalVista = 0
    for(let i=1;i<=15;i++){


     

        valor = Number(prompt(`Informe o valor da transação ${i}`))
        tipo = prompt(`Informe o tipo (V para à vista e P para à prazo) da transação ${i}`).toUpperCase() // converte para maiúscula
        if (tipo == 'V') { // a vista
            totalVista = totalVista + valor
        }
        else if (tipo == 'P') { // à prazo
            totalPrazo = totalPrazo + valor
        }
    }
    // soma os totais
    let totalGeral = totalPrazo + totalVista
    // primeira parcela do total a prazo
    let parcela = totalPrazo / 3

    alert(`Total a vista ${totalVista} - Total a prazo ${totalPrazo} - Total geral ${totalGeral} - 1a. parcela a prazo ${parcela}`)

}

function exercicio21(){
   let voto
   let qtde1 = 0, qtde2 = 0, qtde3 = 0, qtde4 = 0, qtdeBranco = 0, qtdeNulo = 0
   voto = Number(prompt(`Informe um voto`))
   do {
        switch (voto){
            case 1: qtde1++
                    break
            case 2: qtde2++
                    break
            case 3: qtde3++
                    break
            case 4: qtde4++
                    break
            case 5: qtdeNulo++
                    break
            case 6: qtdeBranco++
                    break
        }
        voto = Number(prompt(`Informe um novo voto. Digite 0 para encerrar a votação`))
   }
   while (voto != 0)
   let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo
   console.log(` Cand1 ${qtde1} - Cand2 ${qtde2} - Cand3 ${qtde3} - Cand4 ${qtde4}`)
   console.log(` Votos nulos ${qtdeNulo} - Percentual de votos nulos ${qtdeNulo/total*100}`)
   console.log(` Votos em branco ${qtdeBranco} - Percentual de votos em branco ${qtdeBranco/total*100}`)
}

let exercicio23 = function(){
    let opcao // recebe a opção do usuario
    let salario
    // vamos oferecer um menu de opçoes
    do {
        opcao = Number(prompt(`1 novo salario \n 2 ferias \n 3 decimo terceiro \n 4 sair`))
        switch(opcao){
            case 1: salario =  Number(prompt(`Informe o salario`))
                if (salario < 210){
                    alert(`Novo salario${salario + salario*15/100}`)
                }
                else if ((salario > 210) && (salario<=600)) {
                    alert(alert(`novo salario${salario + salario*10/10}`))
                }
                else {
                    alert(`Novo salario ${salario + salario*5/100}`)
                }
                break
            case 2: salario = Number(prompt(`informe o salario`))
                    alert(`o valor das ferias é ${salario + 1/3*salario}`)
                break
            case 3:salario =  Number(prompt(`informe o salario`))
                    let meses = Number(prompt(`informe numero de meses trabalhados`))
                    alert(`decimo terceiro${salario * meses /12}`.toFixed(2))
                break
            case 4: alert(`o programa sera encerrado`)
                break
            default: alert(`opção invalida. tente novamente!`)
        }
    } 
    while (opcao != 4) {
    }
}

