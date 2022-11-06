
const carrito = []
const tiendaAMD = document.querySelector("div.contendorProductosAMD")
const tiendaNvidia = document.querySelector("div.contendorProductosNvidia")
const plantillaProducto = (tarjeta) => {
    return ` <div class="tarjetasGraficas">
              <h4>${tarjeta.nombre}</h4>
              <img loading="lazy" src="${tarjeta.imagen}" alt="${tarjeta.nombre}">
              <p>$${tarjeta.precio}</p>
              <button class="botonAddCarrito" id="${tarjeta.id}">AGREGAR A CARRITO</button>
             </div>`
}
const agregarAlCarritoAMD = (btnId) => {
    if (btnId <= 7) {
        let tarjetaSumar = tarjetasVideoAMD.find(tarjeta => tarjeta.id == btnId)

        carrito.push(tarjetaSumar)
        console.clear()
        console.table(carrito)
    } else {
        let tarjetaSumar = tarjetasVideoNvidia.find(tarjeta => tarjeta.id == btnId)
        carrito.push(tarjetaSumar)
        console.clear()
        console.table(carrito)
    }
}

const cargarTiendaAMD = () => {
    tiendaAMD.innerHTML = ""
    tarjetasVideoAMD.forEach(tarjeta => {
        if (tarjeta.stock != 0) {
            tiendaAMD.innerHTML += plantillaProducto(tarjeta)
        }
    })

}

const cargarTiendaNvidia = () => {
    tiendaNvidia.innerHTML = ""
    tarjetasVideoNvidia.forEach(tarjeta => {
        if (tarjeta.stock != 0) {
            tiendaNvidia.innerHTML += plantillaProducto(tarjeta)
        }
    })
}
cargarTiendaAMD()
cargarTiendaNvidia()
const botonesSumarCarrito = () => {
    const btnAddCarrito = document.querySelectorAll(".botonAddCarrito")
    btnAddCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            agregarAlCarritoAMD(boton.id)
        })
    })
}
botonesSumarCarrito()
