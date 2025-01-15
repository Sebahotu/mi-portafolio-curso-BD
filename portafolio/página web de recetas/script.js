function mostrarDetalles() {
console.log("probando")

const botonTema = document.getElementById("cambiarTema");
botonTema.addEventListener("click", () => {
document.body.classList.toggle("temaOscuro");
});


    let detalles = document.getElementById("detallesReceta");
    if (detalles.style.display === "none") {
        detalles.style.display = "block";
    } else {
        detalles.style.display = "none";
    }
}
