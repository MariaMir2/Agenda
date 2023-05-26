import {persona} from './persona';
(() => {
    class telefono extends persona{

        //Declaramos los atributos
        private tipo: string;
        private numero: number;

        //Constructor
        constructor(dni: string, tipo: string, numero: number){
            super(dni);
            this.tipo = tipo;
            this.numero = numero;
        }

        //Getters y Setters
        public getTipo(): string {
            return this.tipo;
        }

        public setTipo(tipo: string): void {
            this.tipo = tipo;
        }

        public getNumero(): number{
            return this.numero;
        }

        public setNumero(num: number): void{
            this.numero = num;
        }
    }
})()
