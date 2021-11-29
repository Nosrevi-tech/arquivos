import java.util.Scanner;

public class Atv5 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int codigo = sc.nextInt();
		int qnt = sc.nextInt();
		double valor;

		if (codigo == 1) {
			valor = qnt * 4.00;
			System.out.printf("Total: R$ %.2f%n", valor);
		} else if (codigo == 2) {
			valor = qnt * 4.50;
			System.out.printf("Total: R$ %.2f", valor);
		} else if (codigo == 3) {
			valor = qnt * 5.00;
			System.out.printf("Total: R$ %.2f", valor);
		}else if(codigo == 4) {
			valor = qnt * 2.00;
			System.out.printf("Total: R$ %.2f", valor);	
		}else {
			valor = qnt *1.5;
			System.out.printf("Total: R$ %.2f", valor);
		}

		sc.close();
	}

}
