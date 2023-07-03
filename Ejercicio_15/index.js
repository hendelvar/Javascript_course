const nombre = "Henry"
const apellido = "Delgadillo"
const persona = {
    nombre,
    apellido
}

//localStorage.setItem("persona", JSON.stringify(persona))
//sessionStorage.setItem("persona", JSON.stringify(persona))

const ahora = new Date()
//document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(ahora.getTime() + 2 * 60000)}`