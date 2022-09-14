function somarvalores (){
    let pedágio1 = Number (document.getElementById("pedágio1").value)
    let pedágio2 = Number (document.getElementById("pedágio2").value)
    let combustível = Number (document.getElementById("combustível").value)
    let soma = pedágio1+ pedágio2+ combustível;
    document.getElementById("valortotal").value = soma
    //alert(pedágio1)
    //alert(pedágio2)
    //alert(combustível)
    }