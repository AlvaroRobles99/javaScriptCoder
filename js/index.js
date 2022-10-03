const datoUsuarioGuardado = "Agus99"
const datoContraseñaGuardado = "Contraseña123"

let pregunta = confirm("¿Desea ingresar con un usuario existente?")

 if(pregunta === true){
    login()
}

 function login(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    let contraseñaUsuario = prompt("Ingrese su contraseña")
    if(nombreUsuario === datoUsuarioGuardado && contraseñaUsuario === datoContraseñaGuardado){
       bienvenida(nombreUsuario)
    } else {
       let nuevoIntento = confirm("El usuario o la contraseña no es valido. ¿Desea intentarlo de nuevo?")
       if(nuevoIntento === true) {
        login()
       }

    }
}

function bienvenida(){
    alert("Bienvenido " + datoUsuarioGuardado)
}


let preguntaTienda = confirm("¿Quiere comprar chocolate?")
if(preguntaTienda === true){
    tienda()
}
function tienda(){
    do{
        preguntarCompra = parseInt(prompt("¿cuatos desea comprar?"))
        respuestaSeguirComprando = confirm("¿desea cambiar la cantidad?")
   }
   while(respuestaSeguirComprando === true){
    alert("gracias por su compra")
   }
  
}
