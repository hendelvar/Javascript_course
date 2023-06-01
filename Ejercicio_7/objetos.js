const datos = {
    nombre: "Henry",
    apellido: "Delgadillo",
    edad: 33,
    altura: "1.68 m",
    isDeveloper: true
}

const numEdad = "edad"

const datos2 = [
    {
        nombre: "Henry",
        apellido: "Delgadillo",
        edad: 33,
        altura: "1.68 m",
        isDeveloper: true
    },
    {
        nombre: "Cesar",
        apellido: "Perez",
        edad: 34,
        altura: "1.69 m",
        isDeveloper: false
    },
    {
        nombre: "Cecilia",
        apellido: "Angulo",
        edad: 33,
        altura: "1.66 m",
        isDeveloper: false
    }
]

const datos2Ordenados = datos2.sort((a, b) => a.edad - b.edad)