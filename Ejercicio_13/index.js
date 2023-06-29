let nombre = "Henry"

let apellido = "Delgadillo"

let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase() 
console.log(estudianteMinus)

let estudianteLength = estudiante.length
console.log(estudianteLength)

let nombreInicio = nombre.substring(0, 1)
console.log(nombreInicio)

let apellidoFinal = apellido.substring(apellido.length-1, apellido.length)
console.log(apellidoFinal)

let estudianteJunto = estudiante.replace(/ /g, "")
console.log(estudianteJunto)

let estudianteIncluye = estudiante.includes(nombre)
console.log(estudianteIncluye) 