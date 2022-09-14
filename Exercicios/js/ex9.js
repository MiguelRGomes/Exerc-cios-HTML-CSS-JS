function calcular(){

    //entrada de dados
    let saldo = Number(document.getElementById("saldo").value)

    let credito
    if (saldo > 400){
        credito = (30 * saldo) / 100
    }
    else if ((saldo <= 400) && (saldo > 300)){
        credito = (25 * saldo) / 100
    }
    else if ((saldo <= 300) && (saldo > 200)){
        credito = (20 * saldo) / 100
    }
    else if ((saldo <= 200) && (saldo >= 0)){
        credito = (10 * saldo) / 100
    }
    else {
        credito = 0
    }

    document.getElementById("resultado").innerHTML = `O crédito oferecido é de ${credito.toFixed(2)}`
}