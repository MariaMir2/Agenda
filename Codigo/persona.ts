import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";

export class persona{

    //Declaramos los atributos de la clase Persona
    private nombre: string;
    private apellidos: string;
    private edad: number;
    public dni: string;
    private cumpleanyos: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: direccion[];
    private mails: mail[];
    private telefonos: telefono[];
    private notas: string[];

    //Constructor
    constructor(dni: string){
        this.nombre = '';
        this.apellidos = '';
        this.colorFavorito = '';
        this.edad = 0;
        let date = new Date('');
        this.cumpleanyos = date;
        this.sexo = '';
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = [];
        this.dni = dni;
    }

    //Creamos los getters y los setters para cada atributo
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(name: string): void {
        this.nombre = name;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(surname: string): void {
        this.apellidos = surname;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(age: number): void {
        this.edad = age;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getCumple(): Date {
        return this.cumpleanyos;
    }

    public setCumple(birth: string): void {
        let date = new Date(birth);
        this.cumpleanyos = date;
    }

    public getColor(): string {
        return this.colorFavorito;
    }

    public setColor(color: string): void {
        this.colorFavorito = color;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public getDirecciones(): direccion[] {
        return this.direcciones;
    }

    public setDirecciones(adress: direccion): void { //agregar una direccion
        this.direcciones.push(adress);
    }

    public getMails(): mail[] {
        return this.mails;
    }

    public setMails(correo: mail): void { //agregar un mail
        this.mails.push(correo);
    }

    public getTelefono(): telefono[] {
        return this.telefonos;
    }

    public setTelefono(tlf: telefono): void { //agregar un telefono
        this.telefonos.push(tlf);
    }

    public getNotas(): string[] {
        return this.notas;
    }

    public setNotas(note: string): void {
        this.notas.push(note);
    }

    public mostrarDatos(): void {
        console.log("Información del contacto: \n");
        console.log("Nombre Completo: " + this.nombre + ' ' + this.apellidos);
        console.log("Fecha de Nacimiento: " + this.cumpleanyos);
        console.log("Edad: " + this.edad);
        console.log("DNI: " + this.dni);
        console.log("Color favorito: " + this.colorFavorito);
        console.log("Direcciones: \n");
        this.direcciones.forEach((direccion) => console.log("Vía: " + direccion.getCalle() + '\n' + "Número: " + direccion.getNumero() + " Letra: " + direccion.getLetra() + " Piso: " + direccion.getPiso() + "\n" + "CP: " + direccion.getCP() + " Población: " + direccion.getPoblacion() + " Provincia: " + direccion.getProv() + "\n"));
        console.log("Mails: \n");
        this.mails.forEach((mail) => console.log("Tipo: " + mail.getTipo() + " Correo: " + mail.getDireccion()));
        console.log("\nTeléfonos:  \n");
        this.telefonos.forEach((telefono) => console.log("Tipo: " + telefono.getTipo() + " Tlf: " + telefono.getNumero()));
        console.log("\nNotas: " + this.notas + "\n");
    }
};