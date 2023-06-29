const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    alert("click en el boton")
    console.log("funciona")
})

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})