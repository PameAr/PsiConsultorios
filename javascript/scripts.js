var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarForm(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresá tu nombre');
    }

    if (email.value === null || email.value === '') {
        mensajesError.push('Ingresá tu email');
    }else if (!isEmail(email.value)) {
		mensajesError.push('No ingresá un email válido');
	}

    if (asunto.value === null ||asunto.value === '') {
        mensajesError.push('Ingresá un asunto');
    }

    error.innerHTML = mensajesError.join('<br>');

    return false;
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* var form = document.getElementsByClassName('form');
 form.addEventListener('submit', function(evt)) */
