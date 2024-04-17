class Persona {
    constructos(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let persona1 = new Persona("Anna, 31");
console.log(persona1.nombre);
persona1.nombre = 31;
console.log(persona1);