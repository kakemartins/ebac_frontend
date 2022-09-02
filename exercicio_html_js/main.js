const form = document.getElementById('form-verifica');
let formEValido = false;

function validaNumero (a, b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const msgPositiva = `Muito bem, o número B: <b>${numeroB.value}</b> é maior que o número A: <b>${numeroA.value}</b>`;

    formEValido = validaNumero(numeroA.value, numeroB.value);
    if (formEValido) {
        const containerMsgPositiva = document.querySelector('.positive-message');
        containerMsgPositiva.innerHTML = msgPositiva;
        containerMsgPositiva.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';


    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})

