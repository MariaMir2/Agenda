"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenda = void 0;
var agenda = /** @class */ (function () {
    function agenda() {
        this.agenda = [];
    }
    agenda.prototype.agregarAgenda = function (persona) {
        this.agenda.push(persona);
    };
    agenda.prototype.buscarPersona = function (dniP) {
        var encontrado;
        var stop = 0;
        for (var i = 0; i < this.agenda.length; i++) {
            if (this.agenda[i].getDni() === dniP && stop === 0) {
                encontrado = this.agenda[i];
                stop = 1;
            }
        }
        return encontrado;
    };
    return agenda;
}());
exports.agenda = agenda;
