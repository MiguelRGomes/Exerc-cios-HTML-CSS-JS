function calcular(){
    // recuperar os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)

    // cálculo do resultado
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
                break
        case 2: 
                if (nro1 > nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: 
            if(nro2 != 0){// ! = significa diferente
            resultado = nro1 / nro2
            }
            else{
                resultado = "Não pode dividir por 0"
            }
            break
        default: resultado = "Opção Inválida"
    }
    alert (`O resultado é ${resultado}`)
}
    
