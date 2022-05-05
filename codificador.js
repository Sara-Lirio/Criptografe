// Botão criptografe (codifica/decodificar)
var submit = document.querySelector("button");

// Seleção Base64 ou Cifra de César
var select = document.querySelector('#select');

// Campo para colocar número 1 - 25 de Cifra de César
var inputNumero = document.querySelector('#numero');

// Opção seleção para codificar 
var codificando = document.querySelector('#codificar');

// Opção seleção para decodificar
var decodificando = document.querySelector('#decodificar');

// input entrada de mensagem para criptografar
var input = document.querySelector("#entradaUser");

// input de resposta do usuário (retorno) 
var resultado = document.querySelector('#respostaUser');

// CODIFICAR OU DECODIFICAR 
// Escolher um número de 1 - 25 (Cifra) 
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var entradaUser = input.value.split("");
    var verCodificando = codificando.checked;
    var valorInput = parseInt(inputNumero.value);
    document.getElementById('resposta').style.display = 'inline';
    if (valorInput < 1 || valorInput > 25) {
        alert('Por favor, insira um número entre 1 e 25')
    } else if (verCodificando) {
        resultado.value = codificar(entradaUser, valorInput)
    } else {
        resultado.value = decodificar(resultado, entradaUser, valorInput)
    }
});

// Alterando mensagem do botão para codificar
codificando.addEventListener('click', function () {
    document.getElementById('criptografe').style.display = 'none';
    document.querySelector('#codificar').style.fontSize = "10px"
    var tagH2 = document.createElement('h2');
    var remocao = document.querySelector('h2');
    tagH2.innerHTML = 'Codificar Mensagem!';
    submit.append(tagH2)
    if (remocao) {
        remocao.remove()
    }
});

// CODIFICAÇÃO - Cifra de César 
function codificar(resultado, valorInput) {
    if (select.value === 'cifra') {
        return (resultado.map((num) => {
            var codletra = num.charCodeAt();
            if (codletra >= 65 && codletra <= 90) {
                return String.fromCharCode(((codletra - 65 + valorInput) % 26) + 65)
            } else if (codletra >= 97 && codletra <= 122) {
                return String.fromCharCode(((codletra - 97 + valorInput) % 26) + 97)
            } else
                return num
        }).join(''))
    }
}

// Alterando mensagem do botão para decodificar
decodificando.addEventListener('click', function () {
    document.getElementById('criptografe').style.display = 'none';
    document.querySelector('#decodificar').style.fontSize = "10px"
    var tagH2 = document.createElement('h2');
    var remocao = document.querySelector('h2')
    tagH2.innerHTML = 'Decodificar Mensagem!'
    submit.append(tagH2)
    if (remocao) {
        remocao.remove()
    }
});

// DECODIFICAR - Cifra de César 
function decodificar(resultado, valorInput) {
    if (select.value === 'cifra') {
        return (resultado.map((entradaUser) => {
            var codletra = entradaUser.charCodeAt();
            if (codletra >= 65 && codletra <= 90) {
                return (codletra - 65 - valorInput < 0) ? String.fromCharCode(((codletra - 65 - valorInput + 26) % 26) + 65) : String.fromCharCode(((codletra - 65 - valorInput) % 26) + 65)
            } else if (codletra >= 97 && codletra <= 122) {
                return String.fromCharCode(((codletra - 97 - valorInput + 26) % 26) + 97)
            } else return resultado
        }).join('')
        );
    }
}

// Escolhendo a Cifra de Cesar e aparecendo campo para inserir o número de 1 a 25
select.addEventListener('change', function () {
    if (select.value === 'cifra') {
        inputNumero.classList.remove('number');
    } else if (select.value === 'base') {
        submit.setAttribute("onclick", "base64()")
        inputNumero.classList.add('number');
    } else {
        inputNumero.classList.add('number');
    }
});

// Base64
function base64() {
    resultado.value = b64(entradaUser, select)
}

function b64(entradaUser, select) {
    return (select) ? btoa(entradaUser) : atob(entradaUser);
}

// ESTILIZANDO
// Estilizando Campo de Resposta da Codificação/Decodificação
function styleResposta() {
    document.getElementById("respostaUser").style.backgroundColor = "transparent";
    document.getElementById("respostaUser").style.borderRadius = "12px";
    document.getElementById("respostaUser").style.border = "2px solid rgb(63, 37, 37)";
    document.getElementById("respostaUser").style.padding = "10px 20px";
    document.getElementById("respostaUser").style.fontSize = "14pt";
    document.getElementById("respostaUser").style.fontFamily = "'Montserrat', sans-serif";
    document.getElementById("respostaUser").style.margin = "5px 0 5px 230px";
    document.getElementById("respostaUser").style.fontWeight = "bold"
    document.getElementById("respostaUser").style.color = "rgb(63, 37, 37)"
}

styleResposta()

// Estilizando o Input - Inserir número Cifra de César
function styleInput() {
    document.getElementById("numero").style.backgroundColor = "transparent";
    document.getElementById("numero").style.fontSize = "14px";
    document.getElementById("numero").style.border = "1px solid rgb(63, 37, 37)";
    document.getElementById("numero").style.borderRadius = "8px";
    document.getElementById("numero").style.fontFamily = "'Montserrat', sans-serif";
    document.getElementById("numero").style.padding = "3px 12px";
    document.getElementById("numero").style.margin = "5px 0 12px 580px"
    document.getElementById("numero").style.width = "190px"
}

styleInput()


