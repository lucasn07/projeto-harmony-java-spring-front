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
            
             body: JSON.stringify({
                email: email.value,
                senha: senha.value
            })
        })
        .then(function (res) { 
            console.log(res)
            
            if (res.status !== 200) {
                alert(" Não foi possivel efetuar login: Verifique se seu e-mail ou senha estão corretos ! ")
                    
            } else {
                alert("Logado !!!")    
            }
             
        })
        .catch(function (res) { 
            console.log(res)
        })  
};
/*
VALIDAÇÃO FUNCIONANDO PORÉM PRECISO APRENDER A TRATAR ELA DE ACORDO COM O RETORNO DE STATUS.
TRATAR OS STATUS 401, 500, E O STATUS 200(OK) PARA REDIRECIONAR PARA A PAGINA CORRETA.

*/

function limpar () {
    email.value = ""
    senha.value = ""
          
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    validar();
    
});
