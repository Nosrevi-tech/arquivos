import java.util.Locale;
import java.util.Scanner;

public class Atv2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double pi = 3.14159;
		double raio = sc.nextDouble();
		
		double area = pi*Math.pow(raio, 2);
		
	System.out.printf("A = %.4f", area);
	
	sc.close();	
	}

}
