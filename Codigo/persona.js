"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    //Constructor
    function persona(dni) {
        this.nombre = '';
        this.apellidos = '';
        this.colorFavorito = '';
        this.edad = 0;
        var date = new Date('');
        this.cumpleanyos = date;
        this.sexo = '';
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = [];
        this.dni = dni;
    }
    //Creamos los getters y los setters para cada atributo
    persona.prototype.getNombre = function () {
        return this.nombre;
    };
    persona.prototype.setNombre = function (name) {
        this.nombre = name;
    };
    persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    persona.prototype.setApellidos = function (surname) {
        this.apellidos = surname;
    };
    persona.prototype.getEdad = function () {
        return this.edad;
    };
    persona.prototype.setEdad = function (age) {
        this.edad = age;
    };
    persona.prototype.getDni = function () {
        return this.dni;
    };
    persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    persona.prototype.getCumple = function () {
        return this.cumpleanyos;
    };
    persona.prototype.setCumple = function (birth) {
        var date = new Date(birth);
        this.cumpleanyos = date;
    };
    persona.prototype.getColor = function () {
        return this.colorFavorito;
    };
    persona.prototype.setColor = function (color) {
        this.colorFavorito = color;
    };
    persona.prototype.getSexo = function () {
        return this.sexo;
    };
    persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    persona.prototype.setDirecciones = function (adress) {
        this.direcciones.push(adress);
    };
    persona.prototype.getMails = function () {
        return this.mails;
    };
    persona.prototype.setMails = function (correo) {
        this.mails.push(correo);
    };
    persona.prototype.getTelefono = function () {
        return this.telefonos;
    };
    persona.prototype.setTelefono = function (tlf) {
        this.telefonos.push(tlf);
    };
    persona.prototype.getNotas = function () {
        return this.notas;
    };
    persona.prototype.setNotas = function (note) {
        this.notas.push(note);
    };
    return persona;
}());
exports.persona = persona;
;
