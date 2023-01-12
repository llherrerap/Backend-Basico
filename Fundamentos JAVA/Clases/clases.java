import java.util.*;
/*
Una clase en Java se puede entender como un prototipo que define las variables y
los métodos comunes a un cierto tipo de instancias, una clase define todo lo que
caracteriza y pueden hacer una o varias instancias.

En Java, un objeto es básicamente una instancia de una clase


*/
public class Main {
    
    public static void main(String[] args) throws Exception {
    
        MiClase miObjeto; //Declaramos una variable del tipo de la clase
        miObjeto = new MiClase(); //Aquí ya hemos creado un objeto de MiClase
        // o
        MiClase miObjeto = new MiClase(); //Declaramos y creamos el objeto en una línea
        
        
    }
}

//Le damos un nombre "MiClase" a la clase
public class MiClase
{
    //Atributos de la clase
    private String atributo1;
    private int atributo2;
    private float atributo3;

    //Constructor con el mismo nombre de la clase
    public MiClase(){}

    //Métodos de la clase
    public void metodo1()
    {
        //Método vacío
    }

    public String metodo2()
    {
        return "metodo2";
    }
}
