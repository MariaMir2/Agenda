import {persona} from './persona';
(() => {
    class mail extends persona{

        //Declaramos los atributos
        private tipo: string;
        private direccion: string;

        //Constructor
        constructor(dni: string, tipo: string, dir: string){
            super(dni);
            this.tipo = tipo;
            this.direccion = dir;
        }

        //Getters y Setters
        public getTipo(): string{
            return this.tipo;
        }

        public setTipo(tipo: string): void {
            this.tipo = tipo;
        }

        public getDireccion(): string{
            return this.direccion;
        }

        public setDireccion(dir: string): void{
            this.direccion = dir;
        }
    };

})()