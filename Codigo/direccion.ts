import {persona} from './persona';
(() => {
    class direccion extends persona{

        //Declaramos los atributos de la clase Persona
        private calle: string;
        private numero: number;
        private piso: number;
        private letra: string;
        private CP: number;
        private poblacion: string;
        private provincia: string;
        
        //Constructor
        constructor(dni: string, street: string, num: number, piso: number, letra: string,
            cp: number, poblacion: string, prov: string){
                super(dni);
                this.calle = street;
                this.numero = num;
                this.piso = piso;
                this.letra = letra;
                this.CP = cp;
                this.poblacion = poblacion;
                this.provincia = prov;
        }

        //Creamos los getters y los setters para cada atributo
        public getCalle(): string {
            return this.calle;
        }

        public setCalle(street: string): void {
            this.calle = street;
        }

        public getNumero(): number {
            return this.numero;
        }

        public setNumero(num: number): void {
            this.numero = num;
        }

        public getPiso(): number {
            return this.piso;
        }

        public setPiso(piso: number): void {
            this.piso = piso;
        }
        
        public getLetra(): string {
            return this.letra;
        }

        public setLetra(letra: string): void {
            this.letra = letra;
        }

        public getCP(): number {
            return this.CP;
        }

        public setCP(cp: number): void {
            this.CP = cp;
        }

        public getPoblacion(): string {
            return this.poblacion;
        }

        public setPoblacion(poblacion: string): void {
            this.poblacion = poblacion;
        }

        public getProv(): string {
            return this.provincia;
        }

        public setProv(prov: string): void {
            this.provincia = prov;
        }
    }
})()