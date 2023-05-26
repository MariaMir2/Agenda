import { persona } from './persona';
import { agenda } from './agenda';

(() => {
  class main {
    constructor() {
        // Crear tres objetos de tipo persona
        let persona1 = new persona("12345678A");
        let persona2 = new persona("12345678B");
        let persona3 = new persona("12345678C");
        let agenda1 = new agenda();

        // Establecer información de la persona 1
        persona1.setNombre("Juan");
        persona1.setApellidos("Alonso");
        persona1.setEdad(30);
        persona1.setCumple("1993-02-10");
        persona1.setSexo("Masculino");
        persona1.setColor("rojo");
        persona1.setDirecciones("Avda de la Luz 32");
        persona1.setMails("jalonso@gmail.com");
        persona1.setTelefono(999888999);

        // Establecer información de la persona 2
        persona2.setNombre("María");
        persona2.setApellidos("Miranda");
        persona2.setEdad(25);
        persona2.setCumple("1997-10-22");
        persona2.setSexo("Femenino");
        persona2.setColor("azul");
        persona2.setDirecciones("Sector Literatos 24");
        persona2.setMails("mariamirandatic@gmail.com");
        persona2.setTelefono(666555444);
        persona2.setNotas("Alergia al polen");

        // Establecer información de la persona 3
        persona3.setNombre("Carlos");
        persona3.setApellidos("Rovira");
        persona3.setEdad(40);
        persona3.setCumple("1983-04-20");
        persona3.setSexo("Masculino");
        persona3.setColor("amarillo");
        persona3.setDirecciones("Calle Federico García Lorca 20");
        persona3.setMails("carlosrovira24@gmail.com");
        persona3.setTelefono(222111222);

        // Agregar personas a la agenda
        agenda1.agregarAgenda(persona1);
        agenda1.agregarAgenda(persona2);
        agenda1.agregarAgenda(persona3);
        console.log("\n------------ AGENDA --------------\n");

        // Obtener información de la persona 1
        console.log("Registro 1: \n");
        console.log("Nombre: " + persona1.getNombre());
        console.log("Apellidos: " + persona1.getApellidos());
        console.log("Fecha de Nacimiento: " + persona1.getCumple());
        console.log("Edad: " + persona1.getEdad());
        console.log("DNI: " + persona1.getDni());
        console.log("Color favorito: " + persona1.getColor());
        console.log("Direcciones: " + persona1.getDirecciones());
        console.log("Mails: " + persona1.getMails());
        console.log("Teléfonos: " + persona1.getTelefono());
        console.log("Notas: " + persona1.getNotas() + "\n");

        // Obtener información de la persona 2
        console.log("Registro 2: \n");
        console.log("Nombre: " + persona2.getNombre());
        console.log("Apellidos: " + persona2.getApellidos());
        console.log("Fecha de Nacimiento: " + persona2.getCumple());
        console.log("Edad: " + persona2.getEdad());
        console.log("DNI: " + persona2.getDni());
        console.log("Color favorito: " + persona2.getColor());
        console.log("Direcciones: " + persona2.getDirecciones());
        console.log("Mails: " + persona2.getMails());
        console.log("Teléfonos: " + persona2.getTelefono());
        console.log("Notas: " + persona2.getNotas() + "\n");

        // Obtener información de la persona 3
        console.log("Registro 3: \n");
        console.log("Nombre: " + persona3.getNombre());
        console.log("Apellidos: " + persona3.getApellidos());
        console.log("Fecha de Nacimiento: " + persona3.getCumple());
        console.log("Edad: " + persona3.getEdad());
        console.log("DNI: " + persona3.getDni());
        console.log("Color favorito: " + persona3.getColor());
        console.log("Direcciones: " + persona3.getDirecciones());
        console.log("Mails: " + persona3.getMails());
        console.log("Teléfonos: " + persona3.getTelefono());
        console.log("Notas: " + persona3.getNotas() + "\n");

        // Buscar una persona en la agenda por su DNI
        var personaEncontrada = agenda1.buscarPersona("12345678B");
        console.log("------------- BUSCANDO ------------\n");
        if (personaEncontrada == undefined) {
            console.log('La persona no ha sido encontrada en la agenda \n');
        } else {
            console.log("Persona encontrada en la agenda:\n");
            console.log("Nombre: " + personaEncontrada.getNombre());
            console.log("Apellidos: " + personaEncontrada.getApellidos());
            console.log("Fecha de Nacimiento: " + persona3.getCumple());
            console.log("Edad: " + personaEncontrada.getEdad());
            console.log("DNI: " + personaEncontrada.getDni());
            console.log("Color favorito: " + personaEncontrada.getColor());
            console.log("Direcciones: " + personaEncontrada.getDirecciones());
            console.log("Mails: " + personaEncontrada.getMails());
            console.log("Teléfonos: " + personaEncontrada.getTelefono());
            console.log("Notas: " + personaEncontrada.getNotas() + "\n");
            console.log("Añadiendo datos nuevos...");
            personaEncontrada.setDirecciones("Calle Trafalgar 2");
            personaEncontrada.setMails("maria@trabajo.com");
            personaEncontrada.setTelefono(333444555);
            console.log("Datos añadidos con éxito");
        }

        //Imprimimos de nuevo los datos de la agenda
        console.log("\n------------ AGENDA --------------\n");

        // Obtener información de la persona 1
        console.log("Registro 1: \n");
        console.log("Nombre: " + persona1.getNombre());
        console.log("Apellidos: " + persona1.getApellidos());
        console.log("Fecha de Nacimiento: " + persona1.getCumple());
        console.log("Edad: " + persona1.getEdad());
        console.log("DNI: " + persona1.getDni());
        console.log("Color favorito: " + persona1.getColor());
        console.log("Direcciones: " + persona1.getDirecciones());
        console.log("Mails: " + persona1.getMails());
        console.log("Teléfonos: " + persona1.getTelefono());
        console.log("Notas: " + persona1.getNotas() + "\n");

        // Obtener información de la persona 2
        console.log("Registro 2: \n");
        console.log("Nombre: " + persona2.getNombre());
        console.log("Apellidos: " + persona2.getApellidos());
        console.log("Fecha de Nacimiento: " + persona2.getCumple());
        console.log("Edad: " + persona2.getEdad());
        console.log("DNI: " + persona2.getDni());
        console.log("Color favorito: " + persona2.getColor());
        console.log("Direcciones: " + persona2.getDirecciones());
        console.log("Mails: " + persona2.getMails());
        console.log("Teléfonos: " + persona2.getTelefono());
        console.log("Notas: " + persona2.getNotas() + "\n");

        // Obtener información de la persona 3
        console.log("Registro 3: \n");
        console.log("Nombre: " + persona3.getNombre());
        console.log("Apellidos: " + persona3.getApellidos());
        console.log("Fecha de Nacimiento: " + persona3.getCumple());
        console.log("Edad: " + persona3.getEdad());
        console.log("DNI: " + persona3.getDni());
        console.log("Color favorito: " + persona3.getColor());
        console.log("Direcciones: " + persona3.getDirecciones());
        console.log("Mails: " + persona3.getMails());
        console.log("Teléfonos: " + persona3.getTelefono());
        console.log("Notas: " + persona3.getNotas() + "\n");
    }
  }

  new main(); // Creamos una instancia de la clase main para ejecutar el código

})();
