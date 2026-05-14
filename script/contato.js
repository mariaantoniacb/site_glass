const form = document.querySelector('#form-fale-conosco')
const nome = document.querySelector('#inome')
const email = document.querySelector('#iemail')
const assunto = document.querySelector('#iassunto')
const mensagem = document.querySelector('#imsg')




form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nome.value.trim() === ""){
       alert('Atenção, preencha o seu nome!') 
      
        return;
    }

    if(email.value === "" || !isEmailValid(email.value)){
       alert('Atenção, preencha o seu email corretamente!')
        return;
    }


    if(mensagem.value.trim() === ""){
        alert('Atenção, campo vazio!')
        return;
    }
    
form.submit()
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if(emailRegex.test(email)){
        return true
    }
    return false
}

/*Function? 1: Fazer um addEventListener para verificar se todos campos (nome, email, assunto e mensagem) estão vazios 
(usar function)  mensagem de erro caso estejam vazios*/

/*Funtion 2: validação de email com RegEx */

/*Functon 3:  enviar*/


