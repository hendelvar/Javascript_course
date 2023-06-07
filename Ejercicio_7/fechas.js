const fechaHoy = new Date()

const fechaNacimiento = new Date(1990, 3, 4, 13, 30, 30)

const fechaComparar = fechaHoy > fechaNacimiento

const dia = fechaNacimiento.getDay()

const mes = fechaNacimiento.getMonth() + 1

const anyo = fechaNacimiento.getFullYear()