export class persona{

    //Declaramos los atributos de la clase Persona
    private nombre: string;
    private apellidos: string;
    private edad: number;
    public dni: string;
    private cumpleanyos: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: string[];
    private mails: string[];
    private telefonos: number[];
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

    public getDirecciones(): string[] {
        return this.direcciones;
    }

    public setDirecciones(adress: string): void {
        this.direcciones.push(adress);
    }

    public getMails(): string[] {
        return this.mails;
    }

    public setMails(correo: string): void {
        this.mails.push(correo);
    }

    public getTelefono(): number[] {
        return this.telefonos;
    }

    public setTelefono(tlf: number): void {
        this.telefonos.push(tlf);
    }

    public getNotas(): string[] {
        return this.notas;
    }

    public setNotas(note: string): void {
        this.notas.push(note);
    }
};