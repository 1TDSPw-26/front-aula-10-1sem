//Criando uma lista de objetos:
const usuarios = [
    {id: 1, email:"email@email.com",senha:"12345",nome:"José das Couves",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 2, email:"nadir@email.com",senha:"12345",nome:"Nadir das Batatas",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 3, email:"joel@email.com",senha:"12345",nome:"Joel da Cândida",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 4, email:"tonho@email.com",senha:"12345",nome:"Antonio das Alfaces",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 5, email:"jo@email.com",senha:"12345",nome:"Jaquim das Jacas",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
];

//o que e uma string? podemos dizer que e um array de caracteres
/* let frase = "Estou com muito sono!";
/* console.log(frase[6]); */
/* console.log(frase.length); */

/* for(let x = 0; x < frase.length; x++){
    if(frase[x].toLowerCase() === "o")
        console.log(x,frase[x]);
    
} */ 

//Percorrendo a lista de usuários utilizando estrutura de repetição:
for (let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].id,usuarios[i].nome);
}


//Compare os dados do form contra a lista de usuários
//Utilize estrutura de repetição
//Imprima a lista de usuários.





//const botao = document.getElementById("btnEntrar"); tambem ta certo
const botao = document.querySelector("#btnEntrar");

botao.addEventListener("click", (e)=>{
    
    //console.log(this.textContent); //Quando utilizamos o this, estamos realizando uma referência ao elemento principal.
    e.preventDefault();

    //Capturando dados do campo de email e senha
    //const email = document.getElementById("idEmail");
    //const senha = document.getElementById("idSenha");
    
    //Declarando um objeto:
    let usuario = {
        email: document.getElementById("idEmail").value,
        senha: document.getElementById("idSenha").value
    }

    console.log( usuario.email );
    console.log( usuario.senha );


   //const userDoBanco = {
   //    email  : "email@email.com",
   //    senha  : "12345",
   //    nome   : "José das Couves",
   //    avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
   //}

    //Validação de dados do usuário

    try {
        if(usuario !== null){

            for(let x = 0 ; x < usuarios.length ; x++){
                
                if( (usuario.email === usuarios[x].email) && (usuario.senha === usuarios[x].senha) ){
                    alert("Login realizado com sucesso!");

                    //Informando o usuário que ele será redirecionado!
                    const divMsg = document.getElementById("msg");
                    
                    let contador = 5;

                    //Adicionando a msg em um <p></p> através de innerHTML
                    divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundo.....</p>`;

                    const intervalo = setInterval( ()=>{

                        contador--;

                        divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundo.....</p>`;

                        if(contador === 0){
                            window.location.href = "../index.html";
                            clearInterval(intervalo);
                        }

                    },1000 );

                    //const timeOut = setTimeout(function(){
                    //    //Redirecionando o usuário para a página de inicial!
                    //    window.location.href = "../index.html";
                    //    
                    //    clearTimeout(timeOut);
                    //    
                    //},5000);

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



    //Crie um novo objeto com as propriedades email e senha.
    //Compare contra os dados do usuário.
    //Crie uma validação para os campos de e-mail e senha.
    //Se a validacão for bem sucedida, exibir mensagem de sucesso, caso contrário, exiba mensagem de erro.



}); 


/* function validar(){
    //funcao tradicional
    console.log("NAO EXECUTE!!");
} */

/* function validar(a,b){
    let resultado = a + b;
    return resultado;
}

console.log(validar(2,2)); */

/* const validar = (a,b) => a+b;
console.log(validar(2,2)); */

/* const validar = (a,b) =>{
    return a+b;
}
console.log(validar(2,2)); */


    //Tente realizar a validacao da lista contra o objeto que recupera os dados fora do form.
