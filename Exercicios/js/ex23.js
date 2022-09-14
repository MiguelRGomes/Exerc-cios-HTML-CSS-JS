function verificar(){
    // entrada 

    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)

    
    let precounitario
    if ((codigo >=1 ) && (codigo <= 10)){
        precounitario = 10
    }
    else if ((codigo >=11 ) && (codigo <= 20)){
        precounitario = 15
    }
    else if ((codigo >=21 ) && (codigo <= 30)){
        precounitario = 20
    }
    else if ((codigo >=31 ) && (codigo <= 40)){
        precounitario = 30
    }
    else {
        precounitario = 0
    }

    let precototal = precounitario * quantidade
    let valordesconto
    if (precototal < 250){
        valordesconto = (5 * precototal) / 100
    }
    else if ((precototal >= 250) && (precototal <= 500)){
        valordesconto = (10 * precototal) / 100
    }
    else {
        valordesconto = (15 * precototal) / 100
    }

    let precofinal = precototal - valordesconto
    //saida
    document.getElementById("precounitario").innerHTML = precounitario
    document.getElementById("precototal").innerHTML = precototal
    document.getElementById("valordesconto").innerHTML = valordesconto
    document.getElementById("precofinal").innerHTML = precofinal

}