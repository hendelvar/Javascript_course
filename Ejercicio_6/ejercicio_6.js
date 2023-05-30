const compra = ["Mantequilla", "Pan", "Huevos", "Carne de pollo", "Leche"]

compra.push("Aceite de Girasol")

compra.pop()

const peliculas = [
    { titulo: "El Resplandor", director: "Stanley Kubric", fecha: new Date(1980, 4, 21) },
    { titulo: "Inception", director: "Cristopher Nolan", fecha: new Date(2010, 6, 9) },
    { titulo: "Tar", director: "Tod Field", fecha: new Date(2022, 9, 7) }
]

const peliculasModernas = peliculas.filter(obj => obj.fecha > new Date(2010, 0, 1))

const peliculasDirector = peliculas.map(valor => `${valor.director}`) 

const peliculasTitulo = peliculas.map(valor => `${valor.titulo}`)

const peliculasConcat = peliculasDirector.concat(peliculasTitulo)

const peliculasProp = [...peliculasDirector, ...peliculasTitulo]