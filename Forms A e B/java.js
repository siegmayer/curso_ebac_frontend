//alert ("olá mundo");
//let var1 = document.getElementById(texto-a)
//let var2 = 
//alert ("olá mundo");
//let idade = prompt("Olá,vamos verificar sua idade,por favor digite-a abaixo")
//if(idade >= 16){
//    alert("ok,voce tem idade o suficiente-")
//} else{
//    alert("voce ainda não tem idade o suficiente")
//}
//const resultado = idade >=16 ? 'certo voce ja tem idade' : 'eita ,parece que voce não tem idade'
//alert(resultado)
//anoNascismento = prompt("vamos descobrir sua idade,escreva o ano que voce nasceu")
//function descobrirIdade(anoNascismento){
//    return 2024 - anoNascismento
//}
//idade =
//alert(anoNascismento)


function mostrarAlert(){
    const inputA = document.getElementById('texto-a');
    const inputb = document.getElementById('texto-b');
    const valorA = inputA.value;
    const valorB = inputb.value;
    if(valorB>valorA){
        alert("ok o valor do campo B="+valorA + " é maior que o valor do campo A=" + valorB)
    }else{
        alert("ops o valor do campo B="+valorB + " é menor que o valor do campo A=" + valorA + " não podemos prosseguir,Tente novamente")
    }
}