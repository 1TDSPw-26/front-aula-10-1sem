
//Declarando variaveis

//Declarando com var
// var nome = "Alê";
// console.log(nome);
// //Declarando com let
// let sobrenome = "Silva";
// console.log(sobrenome);
// //Declarando com const
// const PI = 3.14;
// console.log(PI);

//Diferença entre var e let
// var nome = "Alê";
// let sobrenome = "Silva";

// if(true){
//     //redeclarando as variaveis:
//     var nome = "João";
//     let sobrenome = "Souza";
// }

// console.log(nome);
// console.log(sobrenome);

let nr1 = 2;
let nr2 = "3";
console.log(nr1 , parseInt(nr2)); //resultado: 2 3
console.log(nr1 + parseInt(nr2)); //resultado: 5



//Capturando dados do campo de email e senha
const email = document.getElementById("idEmail");
const senha = document.getElementById("idSenha");

//Declarando um objeto:
let usuario = {
    email: email.value,
    senha: senha.value
}
const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){
    e.preventDefault();
    console.log( usuario.email );
    console.log( usuario.senha );
}); 








