const productosListados = [
    {
        nombre: "AMD rx570 8gb", precio: 55560, stock: 2
    },
    {
        nombre: "AMD rx6500XT 4gb", precio: 57960, stock: 3
    },
    {
        nombre: "AMD rx6600 8gb", precio: 79500, stock: 2
    },
    {
        nombre: "AMD rx6700XT 12gb", precio: 115000, stock: 1
    }]

// let preguntaTienda = confirm("¿Quiere comprar una tarjeta grafica?")
if (preguntaTienda === true) {
    tienda()
}



function tienda() {
    do {
        preguntarCompra = parseInt(prompt("¿cuatos desea comprar?"))
        respuestaSeguirComprando = confirm("¿desea cambiar la cantidad?")
    }
    while (respuestaSeguirComprando === true) {
        alert("gracias por su compra")
    }

}
