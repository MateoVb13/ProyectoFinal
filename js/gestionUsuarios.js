
const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
    const numeroIdentificacion = document.getElementById('numero-identificacion').value;
    const direccionResidencia = document.getElementById('direccion-residencia').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const estudiosRealizados = document.getElementById('estudios-realizados').value;
    const tipoUsuario = document.getElementById('tipo-usuario').value;
    const correoElectronico = document.getElementById('correo-electronico').value;
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;


    userForm.reset();
});