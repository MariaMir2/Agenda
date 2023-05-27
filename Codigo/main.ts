import {persona} from './persona';
import {agenda} from './agenda';
import {direccion} from './direccion';
import {telefono} from './telefono';
import {mail} from './mail';

(() => {
  class main {

    constructor() {
      // Creo una agenda para guardar todos los objetos de tipo persona
      let agenda1 = new agenda();

      // Establecer y crear información de la persona 1
      var persona1 = new persona("12345678A");
      let direccionP1 = new direccion("Calle los Tristes", 21, 3, "A", 28040, "Madrid", "Madrid");
      let mailP1 = new mail("personal", "jalonso@gmail.com");
      let telefonoP1 = new telefono("personal", 999888999);
      persona1.setNombre("Juan");
      persona1.setApellidos("Alonso");
      persona1.setEdad(30);
      persona1.setCumple("1993-02-10");
      persona1.setSexo("Masculino");
      persona1.setColor("rojo");
      persona1.setDirecciones(direccionP1);
      persona1.setMails(mailP1);
      persona1.setTelefono(telefonoP1);

      // Establecer y crear información de la persona 2
      var persona2 = new persona("12345678B");
      let direccionP2 = new direccion("Avda Infante Don Fernando", 32, 2, "C", 29200, "Antequera", "Málaga");
      let mailP2 = new mail("trabajo", "mariamirandatic@gmail.com");
      let telefonoP2 = new telefono("personal", 666555444);
      persona2.setNombre("María");
      persona2.setApellidos("Miranda");
      persona2.setEdad(25);
      persona2.setCumple("1997-10-22");
      persona2.setSexo("Femenino");
      persona2.setColor("azul");
      persona2.setDirecciones(direccionP2);
      persona2.setMails(mailP2);
      persona2.setTelefono(telefonoP2);
      persona2.setNotas("Alergia al polen");

      // Establecer y crear información de la persona 3
      var persona3 = new persona("12345678C");
      let direccionP3 = new direccion("Sector Literatos", 32, 5, "B", 28760, "Tres Cantos", "Madrid");
      let mailP3 = new mail("personal", "carlosrovira32@gmail.com");
      let telefonoP3 = new telefono("trabajo", 222111222);
      persona3.setNombre("Carlos");
      persona3.setApellidos("Rovira");
      persona3.setEdad(40);
      persona3.setCumple("1983-04-20");
      persona3.setSexo("Masculino");
      persona3.setColor("amarillo");
      persona3.setDirecciones(direccionP3);
      persona3.setMails(mailP3);
      persona3.setTelefono(telefonoP3);

      // Agregar personas a la agenda
      agenda1.agregarAgenda(persona1);
      agenda1.agregarAgenda(persona2);
      agenda1.agregarAgenda(persona3);

      console.log("\n------------ AGENDA --------------\n");

      // Obtener información de la persona 1
      persona1.mostrarDatos();

      // Obtener información de la persona 2
      persona2.mostrarDatos();

      // Obtener información de la persona 3
      persona3.mostrarDatos();

      // Buscar una persona en la agenda por su DNI
      var personaEncontrada = agenda1.buscarPersona("12345678B");
      console.log("------------- BUSCANDO ------------\n");
      if (personaEncontrada == undefined) {
          console.log('La persona no ha sido encontrada en la agenda \n');
      } else {
        console.log("Persona encontrada en la agenda:\n");
        personaEncontrada.mostrarDatos();
        console.log("Añadiendo datos nuevos...");
        let direccionNueva = new direccion("Paseo de la Castellana", 82, 31, "A", 28035, "Madrid", "Madrid");
        let mailNuevo = new mail("personal", "maria.miranda@gmail.com");
        let telefonoNuevo = new telefono("trabajo", 999222888);
        personaEncontrada.setDirecciones(direccionNueva);
        personaEncontrada.setMails(mailNuevo);
        personaEncontrada.setTelefono(telefonoNuevo);
        console.log("Datos añadidos con éxito");
      }

      //Imprimimos de nuevo los datos de la agenda
      console.log("\n------------ AGENDA --------------\n");

      // Obtener información de la persona 1
      persona1.mostrarDatos();

      // Obtener información de la persona 2
      persona2.mostrarDatos();

      // Obtener información de la persona 3
      persona3.mostrarDatos();
    }
  }

  new main(); // Creamos una instancia de la clase main para ejecutar el código

})();
