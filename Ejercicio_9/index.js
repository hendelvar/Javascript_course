const logger = require('./logger')

const funcion = valor => {
    if(typeof valor === "number") {
        return valor + 2
    }
    throw new Error("El valor debe ser numerico");
}

const numero = 4

try {
    console.log("Ejecutandose de manera correcta")
    const correcto = funcion(numero)
    console.log(correcto)
} catch(e) {
    console.log("Error!")
    console.error(e)
}