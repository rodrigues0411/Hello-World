let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario == null){
    elemento. textContent = "Seja muito Bem Vindo"
}else{
    elemento. textContent = nomeUsuario;
}

