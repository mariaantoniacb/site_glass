const form = document.querySelector('#form-fale-conosco')
const nome = document.querySelector('#inome')
const email = document.querySelector('#iemail')
const assunto = document.querySelector('#iassunto')
const mensagem = document.querySelector('#imsg')
const msgErro = document.querySelectorAll('.msg-erro')


function setError(index){
    msgErro[index].style.display = 'block';
}

function removeError(index){
    msgErro[index].style.display = 'none';
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    

    if(nome.value.trim() == "" || (nome.value.length < 3) ){
       
       setError(0)
        return
    }else{
        removeError(0)
    }

    if(email.value === "" && !isEmailValid(email.value)){
      
       setError(1)
        return
    }else{
        removeError(1)
    }


    if(mensagem.value.trim() === ""){
        
        setError(2)
        return;
    }else{
        removeError(2)
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


