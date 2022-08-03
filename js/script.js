//Instanciamando elemento do HTML

let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

console.log(sliderElement)
let containerPassword = document.querySelector('#container-password');

//variáveis para armazena os valores para criação da senha
let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRDTUVXWYZ1234567890"
let novaSenha = '';

//instanciando  o valor para sizepassword
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

    function generatePassaword(){
        let pass = '';
        for(let i = 0, n = charset.length; i < sliderElement.value; i++){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }
        password.innerHTML = pass;
        console.log('aqui');
        containerPassword.classList.remove("hide");
        novaSenha = pass;
    }
    function passCopy(){
        navigator.clipboard.writeText(novaSenha)
    }
