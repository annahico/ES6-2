class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        if (nombre !== "") {
            this.#nombre = nombre;
        } else {
            console.log("El nombre no es valido")
        }
    }


    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        if (edad >= 1) {
            this.#edad = edad;
        } else {
            console.log("La edad tiene  ue ser mayor que uno")
        }
    }
    saludar() {
        console.log("Hola soy ${this.#nombre} y tengo ${ this.#edad} años");
    }
}

class Estudiante extends Persona {
    #grado;

    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.#grado = grado;

    }

    estudiar() {
        console.log("${this.#nombre} está estudiando en el grado ${ this.#grado} años");
    }
}

/////////////////////////

let persona1 = new Persona("Anna", 31);
persona1.saludar();

let estudiante1 = new Estudiante("Martin", 32, "12vo");
estudiante1.saludar();
estudiante1.estudiar();
