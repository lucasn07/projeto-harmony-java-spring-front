const formulario = document.querySelector("form");

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const nome = document.querySelector("#nome");
const tel = document.querySelector("#tel");
const apto = document.querySelector("#apto");

function cadastrar() {

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            
            /*LEMBRETE:(No body do json os campos precisam ser iguais aos do backend (endpoints) da classe Usuario no backend)*/
            
            body: JSON.stringify({
                email: email.value,
                senha: senha.value,
                nome: nome.value,
                telefone: tel.value,
                apartamento: apto.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function limpar () {
    email.value = ""
    senha.value = ""
    nome.value = ""
    tel.value = ""
    apto.value = ""      
};

function redirecionar() {

}

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    cadastrar();
    alert("Cadastro realizado com sucesso!")
    window.location.replace("index.html");
});