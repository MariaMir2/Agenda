"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
var mail = /** @class */ (function () {
    //Constructor
    function mail(tipo, dir) {
        this.tipo = tipo;
        this.direccion = dir;
    }
    //Getters y Setters
    mail.prototype.getTipo = function () {
        return this.tipo;
    };
    mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    mail.prototype.setDireccion = function (dir) {
        this.direccion = dir;
    };
    return mail;
}());
exports.mail = mail;
;
