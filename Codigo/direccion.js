"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    //Constructor
    function direccion(street, num, piso, letra, cp, poblacion, prov) {
        this.calle = street;
        this.numero = num;
        this.piso = piso;
        this.letra = letra;
        this.CP = cp;
        this.poblacion = poblacion;
        this.provincia = prov;
    }
    //Creamos los getters y los setters para cada atributo
    direccion.prototype.getCalle = function () {
        return this.calle;
    };
    direccion.prototype.setCalle = function (street) {
        this.calle = street;
    };
    direccion.prototype.getNumero = function () {
        return this.numero;
    };
    direccion.prototype.setNumero = function (num) {
        this.numero = num;
    };
    direccion.prototype.getPiso = function () {
        return this.piso;
    };
    direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    direccion.prototype.getLetra = function () {
        return this.letra;
    };
    direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    direccion.prototype.getCP = function () {
        return this.CP;
    };
    direccion.prototype.setCP = function (cp) {
        this.CP = cp;
    };
    direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    direccion.prototype.getProv = function () {
        return this.provincia;
    };
    direccion.prototype.setProv = function (prov) {
        this.provincia = prov;
    };
    return direccion;
}());
exports.direccion = direccion;
