const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const formularioContacto = document.querySelector('.contacto');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerInput);
email.addEventListener('input', leerInput);
mensaje.addEventListener('input', leerInput);

formularioContacto.addEventListener('submit', validarForm);


function leerInput(evt) {
    datos[evt.target.id] = evt.target.value;
}

function validarForm(evt) {
    evt.preventDefault();
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios.', true);
        return;
    }

    mostrarAlerta('Mensaje enviado correctamente.');
}

function mostrarAlerta(mensaje, error = null) {

    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formularioContacto.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000)

}