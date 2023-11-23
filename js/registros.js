

document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registro-form');

    registroForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        window.location.href = 'inicio_sesion.html';
    });
});
