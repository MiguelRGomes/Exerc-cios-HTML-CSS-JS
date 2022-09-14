function organizar (){// usamos fuction para organizar
    // vamos recuperar o peso digitado pelo usuário
    // document -> representa o documento HTML
    // getElementById("peso") -> recupera a caixa de texto
    // .value -> recupera o valor dentro da caixa do texto
    // let peso -> declarando uma variável que guarda o peso
    let peso = document.getElementById("peso").value
    // vamos recuperar a altura digitada pelo usuário
    let altura = document.getElementById("altura").value
    // calcular e mostrar o imc
    let imc = peso / (altura*altura) 
    //propriedade innerHTML - define ou obtém a sintaxe HTML
    document.getElementById("resultado").value = imc.toFixed(2)               
    //alert(peso)
    //alert(altura)
    //('Boa noite')
}
