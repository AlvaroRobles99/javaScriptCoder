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
const carrito = []



const btnRegistro = document.querySelector(".botonRegistro")
btnRegistro.addEventListener("click", function (e) {
    let nuevoEmail = prompt("Ingrese su Email").trim()
    let nuevoNombreDeUsuario = prompt("Escriba su nombre usuario").trim()
    let nuevaContraseña = prompt("Establesca una Constraseña").trim()
    let usuarioNuevo = new UsuariosRegistrados(nuevoEmail, nuevoNombreDeUsuario, nuevaContraseña)
    usuariosRegistradosTotal.push(usuarioNuevo)
    alert("El usuario se creo con exito")
})