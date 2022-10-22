
const btnLogin = document.querySelector(".botonlogin")

btnLogin.addEventListener("click", function (event) {
    let pregunta = confirm("¿Desea ingresar con un usuario existente?")

    if (pregunta === true) {
        login()
    }

})

function login() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario").trim()
    let contraseñaUsuario = prompt("Ingrese su contraseña").trim()

    if (nombreUsuario === usuario1.nombreDeUsuario && contraseñaUsuario === usuario1.contraseñaDeUsuario || nombreUsuario === usuario2.nombreDeUsuario && contraseñaUsuario === usuario2.contraseñaDeUsuario) {
        bienvenida(nombreUsuario)
    } else {
        let nuevoIntento = confirm("El usuario o la contraseña no es valido. ¿Desea intentarlo de nuevo?")
        if (nuevoIntento === true) {
            login()
        }

    }
}

function bienvenida(nombreUsuario) {
    alert("Bienvenido " + nombreUsuario)
}

