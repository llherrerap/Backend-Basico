import java.util.*;
/* 
JAVA es un lenjuage de tipado estatico, lo que queire decir que al momento de 
declarar una nueva variable, se debe especificar el tipo de la variable.

    Tipo_Variable Nombre_Varaible = Valor_Varaible ;
    

*/
public class Main {
    public static void main(String[] args) throws Exception {
        // Ejemplo de una declaración de varaible de tipo Entero
        int numero = 10;
        // Para imprimir por consola se usa System.out.println()
        System.out.println(numero);
        
        // Si a la variable numero le asiganra un valor que no es de tipo entero,
        // Esto botaria un error.
        
        numero = "casa"; // Es un error.
        
    }
}