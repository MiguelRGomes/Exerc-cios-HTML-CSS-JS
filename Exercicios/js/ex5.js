function calcular(){
    // recuperar os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)

    // cálculo do resultado
    let resultado
    if (opcao == 1){ // resultado será a média
        resultado = (nro1 + nro2) / 2
    }
    else if (opcao == 2){
            if (nro1 > nro2){
                resultado = nro1 - nro2
            }
            else {
                resultado = nro2 - nro1
            }
    }
    else if (opcao == 3){ // multiplicação
        resultado = nro1 * nro2
    }
    else if (opcao == 4){
        if(nro2 != 0){// ! = significa diferente
            resultado = nro1 / nro2
        }
        else{
            resultado = "Não pode dividir por 0"
        }
    }
    else{
        resultado = "Opção Inválida"
    }
    alert (`O resultado é ${resultado}`)
}
    
