const Alumno = require("./Alumno.js");

console.log(Alumno, "")

const al = new Alumno("Jose", "Alvarez", 25, "Diseño y programación web");
al.agregarMateria("Aplicaciones Híbridas");
al.agregarMateria("Programación II");
al.agregarMateria("Aplicaciones Web Progresivas");
console.log(al, "alumno");
al.mostrarMaterias();