import java.util.Locale;
import java.util.Scanner;


public class Atv6 {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		double a,b,c;
		double pi = 3.14159;
		
		a = sc.nextDouble();
		b = sc.nextDouble();
		c = sc.nextDouble();
		
		double area_triangulo = (a*c)/2;
		double area_circulo = pi*Math.pow(c, 2);
		double area_trapezio = ((a+b)*c)/2;
		double area_quadrado = Math.pow(b, 2);
		double area_retangulo = a*b;
		
		System.out.printf("Trinagulo = %.3f%n", area_triangulo );
		System.out.printf("Circulo = %.3f%n", area_circulo);
		System.out.printf("Trapezio = %.3f%n", area_trapezio);
		System.out.printf("Quadrado = %.3f%n", area_quadrado);
		System.out.printf("Retangulo = %.3f%n", area_retangulo);
		
		sc.close();

	}

}
