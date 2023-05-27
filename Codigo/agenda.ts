import {persona} from './persona';

export class agenda {
    private agenda: Array<persona>;

    constructor(){
        this.agenda = [];
    }

    public agregarAgenda(persona: persona): void {
        this.agenda.push(persona);
    }

    public buscarPersona(dniP: string): persona | undefined {
        var encontrado;
        var stop = 0;
        for (let i = 0; i < this.agenda.length; i++) {
            if (this.agenda[i].getDni() === dniP && stop === 0) {
              encontrado = this.agenda[i];
              stop = 1;
            }
          }
        return encontrado;
    }
}
