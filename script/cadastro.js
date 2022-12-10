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
        .then(function (res) { console.log(res) }) //fazer tratamento de erro de acordo com o retorno, se der certo manter e encaminhar.
        .catch(function (res) { console.log(res) })//fazer tratamento derro de acordo com retorno se for 500 ou 400 fazer tratamento adequado para cada erro retornado.
};

function limpar () {
    email.value = ""
    senha.value = ""
    nome.value = ""
    tel.value = ""
    apto.value = ""      
};



formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    cadastrar();
    //alert("Cadastro realizado com sucesso!")
    //return window.location.replace("index.html");
});
