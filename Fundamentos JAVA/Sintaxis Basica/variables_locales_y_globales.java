import java.util.*;
/* 
Dado que JAVA es un lenjuege oreintado a objetos, lo mas cercarno a una varaible 
global son las que se declaran fuera de un metodo, pero dentro de una clase.

Una varaible que es global se puede usar en cualquier lugar dentro de la clase.
Una variable local solo se puede usar dentro de un metodo y nada mas.

*/
public class Main {
    static int numero = 10; //Es una varible fuera del metodo main, pero dentro de la clase Main
    
    public static void main(String[] args) throws Exception {
        String palabra = "casa"; //Es una variable dentro del metodo main.
        
        System.out.println(palabra);//imprimira casa
        System.out.println(numero);// imprime 10
        
        imprimir();
    }
    public void imprimir(){
        System.out.println(palabra);//dara un error
        System.out.println(numero);// imprime 10
    }
    
}