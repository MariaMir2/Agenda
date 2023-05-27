"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    //Constructor
    function telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    //Getters y Setters
    telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    telefono.prototype.getNumero = function () {
        return this.numero;
    };
    telefono.prototype.setNumero = function (num) {
        this.numero = num;
    };
    return telefono;
}());
exports.telefono = telefono;
