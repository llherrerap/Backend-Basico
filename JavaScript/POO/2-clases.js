/*Clases.
Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
Su sintaxis es la siguiente:
    class nombreClase{
        //propiedades y metodos
    }
Se pueden hacer objetos a partir de las clases de la siguiente forma:
    const nombreObjeto=new nombreClase()    
*/

console.log("-----------------Clases----------------------")

class Animal{ //Definicion de una clase
    /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
    constructor(nombre, genero){
        //Propiedades de la clase animal.
        this.nombre=nombre;
        this.genero=genero;
    }

    saludar(){ //Método de la clase animal
    console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

//Creación de una instancia un objeto basado en la clase animal
const caliman = new Animal("Caliman", "Macho")

//Tipo de dato que es caliman
console.log(typeof(caliman))
//Impresión del objeto
console.log(caliman)
//Llamado al método
caliman.saludar();

/*Herencia
Una clase hija hereda las propiedades y métodos de una clase padre. Se utiliza la palabra reservada extends.
*/

console.log("-----------------Herencia----------------------")

class Perro extends Animal{ //La clase perro extiende de la clase animal-
    constructor(nombre, genero, tamanio){
        //Super es un metodo que manda a llamar el constructor de la clase padre
        super(nombre, genero)
        //Propiedad de la clase perro.
        this.tamanio=tamanio;
    }

    /*Sobreescritura.
     Permite a las clases hijas hacer una implementación de un método que ha sido dado por una clase padre.
    */

    saludar(){ //sobreescritura del metodo saludar
        console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    ladrar(){ //metodo de la clase perro
        console.log("Guau Guau")
    }
}

//Instancia de un objeto basado en la clase perro
const scooby= new Perro("Scooby Doo", "Macho", "Grande")

console.log(scooby);
scooby.saludar();
scooby.ladrar();