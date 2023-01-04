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
        .then(res  => { 
            if (res.status == 401) {
                alert("Email ou Senha incorretos, verifique-os e tente novamente!")
            } else if (res.status == 400) {
                alert("Preencha todos os campos e tente novamente!")
            }
            res.json().then(data => {
                if(res.status == 200 && data !== null) { //Redirecionar de acordo com id acesso && autenticar a sessão da maneira correta 
                    switch(data) {
                        case 3: alert("Login Sindico")
                        console.log(data)
                        console.log(res.status)
                        window.location.replace("painel_sindico.html");
                        break
                        case 2: alert("Login Porteiro")
                        console.log(data)
                        console.log(res.status)
                        break
                        case 1: alert("Login Morador!")
                        console.log(data)
                        console.log(res.status)
                        break
                    }  
                }
            })
            .catch (function (res) { })
        })
};
function limpar () {
    email.value = ""
    senha.value = ""
          
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    validar();
    
});
