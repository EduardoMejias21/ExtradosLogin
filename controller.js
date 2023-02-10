
const idbtnenviar = document.querySelector("#idbtnenviar")


function cambiarColor(e){
    e.preventDefault()
    let boton = e.target
    boton.style.background = "red"
}
function mostrarMensaje(e){
    const divMensaje = document.querySelector("#divMensaje").style.display = 'block';
}

idbtnenviar.addEventListener("click",cambiarColor,()=>{
    cambiarColor()
})