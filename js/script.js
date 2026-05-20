//Criando uma lista de objetos:
const usuarios = [
    {id: 1, email:"email@email.com",senha:"12345",nome:"José Menino",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 2, email:"nadir@email.com",senha:"12345",nome:"Nadir da Silva",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 3, email:"joel@email.com",senha:"12345",nome:"Joel Cândido",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 4, email:"tonho@email.com",senha:"12345",nome:"Antonio dos Santos",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 5, email:"jo@email.com",senha:"12345",nome:"Jaquim Jaleno",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
];


//Compare os dado do form contra a lista de usuários
//Utilize estruura de repetição
//Imprima a lista de usuários.

// const botao = document.getElementById("btnEntrar");
const botao = document.querySelector("#btnEntrar");

botao.addEventListener("click", (e)=>{

    e.preventDefault();

    //Capturando dados do campo de email e senha
    // const email = document.getElementById("idEmail");
    // const senha = document.getElementById("idSenha");
    
    //Declarando um objeto:
    let usuario = {
        email: document.getElementById("idEmail").value,
        senha: document.getElementById("idSenha").value
    }

    console.log( usuario.email );
    console.log( usuario.senha );

    // const userDoBanco = {
    //     email  : "email@email.com",
    //     senha  : "12345",
    //     nome   : "José das Couves",
    //     avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
    // }

    //Validação de dados do usuário

    try {
        if(usuario !== null){

            for(let x = 0 ; x < usuarios.length ; x++){
                console.log(usuarios[x].nome);
                console.log(usuarios[x].email);
                if( (usuario.email === userDoBanco.email) && (usuario.senha === userDoBanco.senha) ){
                        alert("Login realizado com sucesso!");
    
                        //Informando o usuário que ele será redirecionado!
                        const divMsg = document.getElementById("msg");
    
                        //Adicionando a msg em um <p></p> através de innerHTML
                        divMsg.innerHTML = "<p>Você será redirecionado em 5 segundo.....</p>"
    
                        setTimeout(function(){
                            //Redirecionando o usuário para a página de inicial!
                            window.location.href = "../index.html"; 
                        },5000);

                        return;
                    }
                }
                
                throw new Error("Email ou senha incorretos!");
                
        }else{
            throw new Error("Usuário não encontrado!");
        }
        
    } catch (error) {
        console.error(error);
        alert(error);
    }

    
}); 

// function validar(){
//     //Função Tradicional!
//     console.log("NÃO EXECUTE!!");
// }
// function validar(...args){
//     let resultado = args[0] + args[1] + args[2];
//     return resultado;
// }

// console.log(validar(2,2,4));

// const validar = (a,b) => a+b;
// console.log(validar(2,2));

// const validar = (a,b) =>{
//     return a+b;
// }
// console.log(validar(2,2));


    // Tente realizar a validação da lista contra o objeto que recupera dos dados do form.