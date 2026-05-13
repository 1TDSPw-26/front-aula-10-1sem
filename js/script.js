const usuarios = [
    {id: 1, email:"email@email.com",senha: "senha12345",nome: "José das Couves",avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 2, email:"roberto@email.com",senha: "senha12345",nome: "Roberto das Couves",avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 3, email:"joana@email.com",senha: "senha12345",nome: "Joana das Couves",avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 4, email:"Cleiton@email.com",senha: "senha12345",nome: "Cleiton das Couves",avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 5, email:"Gerimun@email.com",senha: "senha12345",nome: "Gerimun das Couves",avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    ];

let nr1 = 2;
let nr2 = "3";
console.log(nr1 , parseInt(nr2)); //resultado: 2 3
console.log(nr1 + parseInt(nr2)); //resultado: 5



const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function(e){
e.eventDefault();}

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

const userDoBanco = {
    email: "email@email.com",
    senha: "senha12345",
    nome: "João das Couves",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
}

try {
    if(usuario !== null){
        if((usuario.email === userDoBanco.email) && (usuario.senha === userDoBanco.senha)){
            alert("Login bem sucedido! Bem-vindo, " + userDoBanco.nome);

            const divMsg = document.getElementById("msg");
        
            divMsg.innerHTML = "<p>Voce será redirecionado em 5 segundos...</p>";

            setTimeout(function(){
               window.location.href = "../index.html";
            },5000);

        } else {
            throw new Error("Email ou senha incorretos!");
        }
    }else{
        throw new Error("Usuário não encontrado!");
    }

}catch(error){
        console.log("Ocorreu um erro: " + error);
        alert("Ocorreu um erro: " + error);
    }
});