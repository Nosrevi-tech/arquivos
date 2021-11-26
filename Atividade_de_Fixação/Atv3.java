import java.util.Scanner;

public class Atv3 {

	public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	
	int a = sc.nextInt();
	int b = sc.nextInt();
	int c = sc.nextInt();
	int d = sc.nextInt();
	
	int diferenca = a*b-c*d;
	
	System.out.println("DIFERENÇA = " + diferenca );
	
	sc.close();
	}

}
