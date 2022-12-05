const formulario = document.querySelector("form");

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");


function validar() {

    fetch("http://localhost:8080/usuarios/login",
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            // Alterar VAR CHAR 200 CAMPO SENHA BANCO DE DADOS
            /* ainda precisa ser feito alterações no backend para funcionar, a principio o back-end está pedindo ID para validação */
            
            body: JSON.stringify({
                email: email.value,
                senha: senha.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function limpar () {
    email.value = ""
    senha.value = ""
          
};



formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    validar();
    
});
