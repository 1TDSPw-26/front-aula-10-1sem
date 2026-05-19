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

const botao = document.querySelector("#btnEntrar");
// console.log(botao.value);

botao.addEventListener("click", function (e) {
  e.preventDefault();

  let usuario = {
    email: document.getElementById("idEmail").value,
    senha: document.getElementById("idSenha").value,
  };

  try {
    if (usuario !== null) {
      for (let index = 0; index < usuarios.length; index++) {
        console.log(usuarios[index].nome);
        console.log(usuarios[index].email);
        if (
          usuario.email === usuarios[index].email &&
          usuario.senha === usuarios[index].senha
        ) {
          alert("Login realizado com sucesso.");

          // informando o usuário que ele será redirecionado
          const divMsg = document.getElementById("msg");

          let contador = 5;
          // Adicionando a mensagem em um <p></p> através de innerHTML
          divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos.</p>`;

          const intervalo = setInterval(() => {
            contador--;

            divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos.</p>`;

            if (contador === 0) {
              window.location.href = "../index.html";
              clearInterval(intervalo);
            }
          }, 1000);

          return;
        }
      }
      throw new Error("Email ou senha incorreto.");
    } else {
      throw new Error("Usuário não encontrado.");
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }
});
