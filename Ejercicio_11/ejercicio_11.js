class Estudiante {
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        console.log(`Estudiante: ${this.nombre}, esta inscrito en la asignatura ${this.asignaturas}.`)
    }
}

const estudiante = new Estudiante("Henry", "HTML")
console.log(estudiante)
estudiante.obtenDatos()