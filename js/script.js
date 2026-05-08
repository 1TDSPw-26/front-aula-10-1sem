
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



const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){
    e.preventDefault();
    //Capturando dados do campo de email e senha
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");
    
    //Declarando um objeto:
    let usuario = {
        email: email.value,
        senha: senha.value
    }

    console.log( usuario.email );
    console.log( usuario.senha );


    //Validação de dados do usuário
    //Crie um novo objeto com as propriedades email e senha.
    //Compare contra os dados do usuário.
    //Crie uma validação para os campos de e-mail e senha.
    //Se a validacão for bem sucedida, exibir mensagem de sucesso, caso contrário, exiba mensagem de erro.



}); 








