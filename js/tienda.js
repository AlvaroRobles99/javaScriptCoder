
const carrito = []
const tiendaAMD = document.querySelector("div.contendorProductosAMD")
const tiendaNvidia = document.querySelector("div.contendorProductosNvidia")
const tiendaPrecios = document.querySelector("div.contenedorProductosPrecio")
const botonAMDF = document.querySelector("button.botonAMDF")
const botonNvidiaF = document.querySelector("button.botonNvidiaF")
const botonMayorF = document.querySelector("button.botonMayorF")
const botonMenorF = document.querySelector("button.botonMenorF")
const botonVerTodo = document.querySelector("button.botonVerTodo")
const iconCarrito = document.querySelector("div.iconCarrito")
const carritoCargar = document.querySelector("article.tienda")
const contenedorProductosCarritos = document.querySelector("div.carrito")
const main = document.querySelector("main.main")
const plantillaProducto = (tarjeta) => {
    return ` <div class="tarjetasGraficas">
              <h4>${tarjeta.nombre}</h4>
              <img loading="lazy" src="${tarjeta.imagen}" alt="${tarjeta.nombre}">
              <p>$${tarjeta.precio}</p>
              <button class="botonAddCarrito" id="${tarjeta.id}">SUMAR AL CARRITO</button>
             </div>`}
                  
                         
const agregarAlCarritoAMD = (btnId) => {
    if (btnId <= 7) {
        let tarjetaSumar = tarjetasVideoAMD.find(tarjeta => tarjeta.id == btnId)
        carrito.push(tarjetaSumar)
    } else {  let tarjetaSumar = tarjetasVideoNvidia.find(tarjeta => tarjeta.id == btnId)
         carrito.push(tarjetaSumar) }}
const cargarTiendaPreciosMenor = () =>{
    tarjetasVideosPreciosMenor.forEach(tarjeta => {
        if(tarjeta.stock != 0){
            tiendaPrecios.innerHTML += plantillaProducto(tarjeta) } })}

            const cargarTiendaPreciosMayor = () =>{
               tarjetasVideosPreciosMayor.forEach(tarjeta => {
                if(tarjeta.stock != 0){
                    tiendaPrecios.innerHTML += plantillaProducto(tarjeta) } })
            }
const cargarTiendaAMD = () => {
    tiendaPrecios.innerHTML = ""
    tiendaAMD.innerHTML = ""
    tarjetasVideoAMD.forEach(tarjeta => {
        if (tarjeta.stock != 0) {
            tiendaAMD.innerHTML += plantillaProducto(tarjeta) } })}

const cargarTiendaNvidia = () => {
    tiendaPrecios.innerHTML = ""
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
    filtrarMenor()
})
botonMayorF.addEventListener("click",()=>{
   filtrarMayor()
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
    tiendaPrecios.innerHTML = ""
    tiendaNvidia.innerHTML = ""
    cargarTiendaAMD()
    botonesSumarCarrito()
}
const filtrarNvidia = () => {
    tiendaPrecios.innerHTML = ""
    tiendaAMD.innerHTML = ""
    cargarTiendaNvidia()
    botonesSumarCarrito()
}
const filtrarTodo = () => {
    tiendaNvidia.innerHTML = ""
    tiendaAMD.innerHTML = ""
    tiendaPrecios.innerHTML = ""
    cargarTiendaAMD()
    cargarTiendaNvidia()
    botonesSumarCarrito()
}
const filtrarMenor = () =>{
    tiendaNvidia.innerHTML = ""
    tiendaAMD.innerHTML = ""
    tiendaPrecios.innerHTML = ""
    cargarTiendaPreciosMenor()
    botonesSumarCarrito()
}
const filtrarMayor = () =>{
    tiendaNvidia.innerHTML = ""
    tiendaAMD.innerHTML = ""
    tiendaPrecios.innerHTML = ""
    cargarTiendaPreciosMayor()
    botonesSumarCarrito()
}
const productisCarritoCargar = ()=>{}

iconCarrito.addEventListener("click", ()=>{
       carritoCargar.innerHTML = ""
       carritoCargar.innerHTML=`<section class="sidebarCarrito"> 
       <h2>
           FILTRAR
       </h2>
       <button class="botonVerTodo">
           COMPRAR
       </button>
       <h3>
           METODO DE PAGO
       </h3>
       <button class="botonAMDF">
           PLACAS DE VIDEO AMD
       </button>
       <button class="botonNvidiaF">
           PLACAS DE VIDEO NVIDIA
       </button>
       <h3>ENVIO</h3>
       <button class="botonMayorF">
           DE MAYOR A MENOR
       </button>
       <button class="botonMenorF">
           DE MENOR A MAYOR
       </button>
   </section>`
  
       carrito.forEach(tarjeta => {
        if(carrito ){
            contenedorProductosCarritos.innerHTML +=plantillaProducto(tarjeta)
        } }) 
})



