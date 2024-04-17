class CuentaBancaria {
    #balance;
    static #contadorCuentasCreadas = 0;

    constructor() {
        this.#balance = 0;
        CuentaBancaria.#contadorCuentasCreadas++;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (value >= 0) {
            this.#balance = value;
        } else {
            console.log("El balance no puede ser negativo");
        }
    }

    static get contadorCuentasCreadas() {
        return CuentaBancaria.#contadorCuentasCreadas;
    }

    static set contadorCuentasCreadas(value) {
        if (value >= 0) {
            CuentaBancaria.#contadorCuentasCreadas = value;
        } else {
            console.log("El contador de cuentas creadas no puede ser negativo");
        }
    }
}

let cuenta1 = new CuentaBancaria();
let cuenta2 = new CuentaBancaria();
let cuenta3 = new CuentaBancaria();
for (let i = 0; i < 1000; i++) {
    new CuentaBancaria();
}

CuentaBancaria.contadorCuentasCreadas = -1; // Esto imprimirá un mensaje de error en la consola
console.log(CuentaBancaria.contadorCuentasCreadas); // Debería seguir siendo 1003
