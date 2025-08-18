class Alumno {
    nombre = "";
    apellido = "";
    edad = null;
    carrera = "";
    materias = [];
    constructor(nombre, apellido, edad, carrera) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
    }

    modificarEdad(edad) {
        this.edad = edad;
    }

    retornarEdad() {
        return this.edad;
    }

    obtenerCarrera() {
        return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }

    agregarMateria(materia) {
        this.materias.push(materia);
    }

    mostrarMaterias(){
        console.table(this.materias);
    }
}

module.exports = Alumno;
