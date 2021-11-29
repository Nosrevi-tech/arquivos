import java.util.Scanner;

public class Atv3 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int a,b;
		
		System.out.println("Digite o primeiro numero:");
		a = sc.nextInt();
		System.out.println("Digite o segundo numero:");
		b = sc.nextInt();
		
		if (a % b == 0 || b % a == 0) {
			System.out.println("São Multiplos");
		}else {
			System.out.println("Não e multiplo");
		}
		sc.close();
	}

}
