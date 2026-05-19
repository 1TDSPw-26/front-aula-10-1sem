//Criando uma lista de objetos:
const usuarios = [
    {id: 1, email:"email@email.com",senha:"12345",nome:"José Menino",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 2, email:"nadir@email.com",senha:"12345",nome:"Nadir da Silva",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 3, email:"joel@email.com",senha:"12345",nome:"Joel Cândida",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 4, email:"tonho@email.com",senha:"12345",nome:"Antonio alves",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
    {id: 5, email:"jo@email.com",senha:"12345",nome:"Jaquim vitor",avatar : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"},
];

for (let index = 0; index < usuarios.length; index++) {
        console.log(usuarios[index].id,usuarios[index].nome);
}

// const botao = document.getElementById("btnEntrar");
const botao = document.querySelector("#btnEntrar");

botao.addEventListener("click", (e)=>{
    e.preventDefault();
    
    //Declarando um objeto:
    let usuario = {
        email: document.getElementById("idEmail").value,
        senha: document.getElementById("idSenha").value,
    }

    console.log( usuario.email );
    console.log( usuario.senha );


    //Validação de dados do usuário

    try {
        if(usuario !== null){
             
            for(let x = 0 ; x < usuarios.length; x++) {

                console.log(usuarios[x].nome);
                console.log(usuarios[x].email);

                 if( (usuario.email === usuarios[x].email) && (usuario.senha === usuarios[x].senha) ){
                    alert("Login realizado com sucesso!");

                    //Informando o usuário que ele será redirecionado!
                    const divMsg = document.getElementById("msg");

                    let contador = 5;

                    //Adicionando a msg em um <p></p> através de innerHTML
                    divMsg.innerHTML = `<p>Você será redirecionado em ${cntador} segundo.....</p>`;

                    const intervalo = setInterval ( ()=>{

                        contador--;

                        divMsg.innerHTML = `<p>Você será redirecionado em ${cntador} segundo.....</p>`;

                        if(contador == 0){
                            window.location,href = "../index.html";
                            clearInterval(intervalo);
                        }

                    },1000 )

                    // const timeOut = setTimeout(function(){
                    //     //Redirecionando o usuário para a página de inicial!
                    //     window.location.href = "../index.html"; 

                    //     clearTimeout(timeOut);

                    // },5000);

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