function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario es un estudiante
    if (username === "estudiante" && password === "1234") {
        alert("Iniciaste sesión como estudiante. Redirigiendo a la página de estudiante...");
        window.location.href = "sistemaAcademicoEstudiantes.html";
    }
    // Verificar si el usuario es un profesor
    else if (username === "profesor" && password === "5678") {
        alert("Iniciaste sesión como profesor. Redirigiendo a la página de profesor...");
        window.location.href = "sistemaAcademicoProfesores.html";
    }
    // Verificar si el usuario es un administrador
    else if (username === "admin" && password === "admin123") {
        alert("Iniciaste sesión como administrador. Redirigiendo a la página de administrador...");
        window.location.href = "panelAdministradores.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}

