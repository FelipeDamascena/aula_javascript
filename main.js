
function botao(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>";

    //alert("Obrigado por clicar!")
}
function redirecionar(){
    window.open("https://web.digitalinnovation.one/")
    //window.location.href ="https://web.digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse!";
   // alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui!";
}
function load(){
    alert ("pagina carregada!")
}
function funcaochange(elemento){
        console.log(elemento.value);
}



/*function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar - false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*function soma(n1, n2){
    return n1 +n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
*/

//alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*var count;
for(count = 0; count <=5; count++){
    alert(count);
    console.log(count)
};
*/

/*var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*var idade = prompt("Qual sua idade?");
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};
*/



//var frutas =[{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString()[0]);
//console.log(lista.join("-"));

/*var nome = "Felipe Damascena";
var n1 = 5;
var n2 = 3;
var frase = "japão é o melhor time do mundo"; 
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase())
//alert(frase.replace("japão", "Brasil"))*/
