
let cantidad = document.getElementById('input_cantidad').value()

funcion ejercicio1(){
   let valor = document.getElementById("input_cantidad").value

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${valorInput}`)
.then ((respuesta) => respuesta.json ())
.then( (datos)=> console.log("La respuesta es: " , datos) )
}
funcion ejercicio2(){
    let inputId = document.getElementById(inputId)
   fetch (`https://pokeapi.co/api/v2/pokemon/{id}`)
   .then( (respuestita) => respuestita.json() )
   .then
}