
const carrito = []
const tiendaAMD = document.querySelector("div.contendorProductosAMD")
const tiendaNvidia = document.querySelector("div.contendorProductosNvidia")
const tiendaPrecios = document.querySelector("div.contenedorProductosPrecio")
const botonAMDF = document.querySelector("button.botonAMDF")
const botonNvidiaF = document.querySelector("button.botonNvidiaF")
const botonMayorF = document.querySelector("button.botonMayorF")
const botonMenorF = document.querySelector("button.botonMenorF")
const botonVerTodo = document.querySelector("button.botonVerTodo")
const plantillaProducto = (tarjeta) => {
    return ` <div class="tarjetasGraficas">
              <h4>${tarjeta.nombre}</h4>
              <img loading="lazy" src="${tarjeta.imagen}" alt="${tarjeta.nombre}">
              <p>$${tarjeta.precio}</p>
              <button class="botonAddCarrito" id="${tarjeta.id}">AGREGAR A CARRITO</button>
             </div>`}
const agregarAlCarritoAMD = (btnId) => {
    if (btnId <= 7) {
        let tarjetaSumar = tarjetasVideoAMD.find(tarjeta => tarjeta.id == btnId)
        carrito.push(tarjetaSumar)
    } else {  let tarjetaSumar = tarjetasVideoNvidia.find(tarjeta => tarjeta.id == btnId)
         carrito.push(tarjetaSumar) }}
const cargarTiendaPreciosMenor = () =>{
    tiendaPrecios.innerHTML = ""
    tiendaAMD.innerHTML = ""
    tiendaNvidia.innerHTML = ""
    tarjetasVideosPrecios.forEach(tarjeta => {
        if(tarjeta.stock != 0){
            tiendaPrecios.innerHTML += plantillaProducto(tarjeta) } })}

            const cargarTiendaPreciosMayor = () =>{
                tiendaPrecios.innerHTML = ""
                tiendaAMD.innerHTML = ""
                tiendaNvidia.innerHTML = ""
               const tarjetasPrecioMayor = tarjetasVideosPrecios.reverse()
               tarjetasPrecioMayor.forEach(tarjeta => {
                if(tarjeta.stock != 0){
                    tiendaPrecios.innerHTML += plantillaProducto(tarjeta) } })
            }
const cargarTiendaAMD = () => {
    tiendaAMD.innerHTML = ""
    tarjetasVideoAMD.forEach(tarjeta => {
        if (tarjeta.stock != 0) {
            tiendaAMD.innerHTML += plantillaProducto(tarjeta) } })}

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
botonMenorF.addEventListener("click",()=>{
    cargarTiendaPreciosMenor()
    botonesSumarCarrito()
})
botonMayorF.addEventListener("click",()=>{
    cargarTiendaPreciosMayor()
    botonesSumarCarrito()
})

botonAMDF.addEventListener("click",()=>{
    filtrarAmd()
})
botonNvidiaF.addEventListener("click",()=>{
    filtrarNvidia()
})
botonVerTodo.addEventListener("click",()=>{
    filtrarTodo()
})
const filtrarAmd = () =>{
    tiendaNvidia.innerHTML = ""
    cargarTiendaAMD()
    botonesSumarCarrito()
}
const filtrarNvidia = () => {
    tiendaAMD.innerHTML = ""
    cargarTiendaNvidia()
    botonesSumarCarrito()
}
const filtrarTodo = () => {
    cargarTiendaAMD()
    cargarTiendaNvidia()
    botonesSumarCarrito()
}