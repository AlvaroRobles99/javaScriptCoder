class UsuariosRegistrados {
    constructor(email, nombreDeUsuario, contraseñaDeUsuario) {
        this.email = email
        this.nombreDeUsuario = nombreDeUsuario
        this.contraseñaDeUsuario = contraseñaDeUsuario
    }
}
const usuariosRegistradosTotal = []
let usuario1 = new UsuariosRegistrados("agus99@email.com", "Agus99", "Contraseña123")
let usuario2 = new UsuariosRegistrados("matias87@emial.com", "Matias87", "Contraseña321")

usuariosRegistradosTotal.push(usuario1, usuario2)
const btnLogin = document.querySelector(".botonlogin")

btnLogin.addEventListener("click", function (event) {
    let pregunta = confirm("¿Desea ingresar con un usuario existente?")

    if (pregunta === true) {
        login()
    }
})

const login = () => {
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
const bienvenida = (nombreUsuario) => {
    alert("Bienvenido " + nombreUsuario)
}
const btnRegistro = document.querySelector(".botonRegistro")
btnRegistro.addEventListener("click", function (e) {
    let nuevoEmail = prompt("Ingrese su Email").trim()
    let nuevoNombreDeUsuario = prompt("Escriba su nombre usuario").trim()
    let nuevaContraseña = prompt("Establesca una Constraseña").trim()
    if (nuevoEmail != "" && nuevoNombreDeUsuario != "" && nuevaContraseña != "") {
        let usuarioNuevo = new UsuariosRegistrados(nuevoEmail, nuevoNombreDeUsuario, nuevaContraseña)
        usuariosRegistradosTotal.push(usuarioNuevo)
        alert("El usuario se creo con exito")
    }
    else {
        alert("Asegurese que ningun campo quedo vacio e intentelo de nuevo.")
    }
})

