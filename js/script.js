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

const usuarios = [
  {
    id: 1,
    email: "email@email.com",
    senha: "12345",
    nome: "José das Couves",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  },
  {
    id: 2,
    email: "nadir@email.com",
    senha: "12345",
    nome: "Nadir das Batatas",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  },
  {
    id: 3,
    email: "joel@email.com",
    senha: "12345",
    nome: "Joel da Cândida",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  },
  {
    id: 4,
    email: "tonho@email.com",
    senha: "12345",
    nome: "Antonio das Alfaces",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  },
  {
    id: 5,
    email: "jo@email.com",
    senha: "12345",
    nome: "Jaquim das Jacas",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  },
];

for (let index = 0; index < usuarios.length; index++) {
  console.log(usuarios[index].id, usuarios[index].nome)
  
}

// let nr1 = 2;
// let nr2 = "3";
// console.log(nr1, parseInt(nr2)); //resultado: 2 3
// console.log(nr1 + parseInt(nr2)); //resultado: 5

const botao = document.querySelector("#btnEntrar")
// console.log(botao.value);

botao.addEventListener("click", function (e) {
  e.preventDefault();
  //Capturando dados do campo de email e senha
  const email = document.getElementById("idEmail");
  const senha = document.getElementById("idSenha");

  //Declarando um objeto:
  let usuario = {
    email: email.value,
    senha: senha.value,
  };

  // console.log( usuario.email );
  // console.log( usuario.senha );

  console.log(email.value);
  console.log(senha.value);
  console.log(botao.value);

  // Criação de usuario
  const userDoBanco = {
    email: "email@email.com",
    senha: "12345",
    nome: "José das Couves",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter",
  };

  //Validação de dados do usuário

  try {
    if (usuario !== null) {
      if (
        usuario.email === userDoBanco.email &&
        usuario.senha === userDoBanco.senha
      ) {
        alert("Login realizado com sucesso.");

        // informando o usuário que ele será redirecionado
        const divMsg = document.getElementById("msg");

        // Adicionando a mensagem em um <p></p> através de innerHTML
        divMsg.innerHTML = "<p>Você será redirecionado em 5 segundos.</p>";

        setTimeout(function () {
          //Redirecionando o usuário para a página de inicial
          window.location.href = "../index.html";
        }, 5000);
      } else {
        throw new Error("Email ou senha incorreto.");
      }
    } else {
      throw new Error("Usuário não encontrado.");
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }

  //Crie um novo objeto com as propriedades email e senha.
  //Compare contra os dados do usuário.
  //Crie uma validação para os campos de e-mail e senha.
  //Se a validacão for bem sucedida, exibir mensagem de sucesso, caso contrário, exiba mensagem de erro.
});