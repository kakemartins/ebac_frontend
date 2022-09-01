const form = document.getElementById('form-verifica');
const numeroA = document.getElementById('numero-a');
let formEValido = false;

function validaNumero (a, b) {
    return a > b;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroB = document.getElementById('numero-b');
    const msgPositiva = `Muito bem, o número A: <b>${numeroA.value}</b> é maior que o número B: <b>${numeroB.value}</b>`;

    formEValido = validaNumero(numeroA.value, numeroB.value);
    if (formEValido) {
        const containerMsgPositiva = document.querySelector('.positive-message');
        containerMsgPositiva.innerHTML = msgPositiva;
        containerMsgPositiva.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        numeroA.style.border = '';
        document.querySelector('.error-message').style.display = 'none';


    } else {
        numeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})

