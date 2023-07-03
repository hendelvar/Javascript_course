localStorage.setItem("nombre", "Henry")
localStorage.setItem("apellido", "Delgadillo")
localStorage.setItem("persona", { nombre: "Henry", apellido: "Delgadillo" })

sessionStorage.setItem("nombre", "Henry")
sessionStorage.setItem("apellido", "Delgadillo")
sessionStorage.setItem("persona", { nombre: "Henry", apellido: "Delgadillo" })

document.cookie = "nombreCokkie=HenryCookie";"expires=" + new Date(0, 0, 0, 0, 2)