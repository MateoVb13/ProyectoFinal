function registrar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    var nuevoUsuario = { usuario: usuario, password: password };

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito.");

    // Verifica si el registro fue exitoso y redirige
    if (registroExitoso()) {
        // Redirige a la página deseada (reemplaza 'nueva_pagina.html' con la URL de tu página)
        window.location.href = "inicioSesion.html";
    }
}

function registroExitoso() {
    // Agrega lógica de verificación adicional aquí si es necesario
    return true; // Cambia esto según tus necesidades de verificación
}
