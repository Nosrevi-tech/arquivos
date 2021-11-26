import java.util.Scanner;

public class Atv5 {

	public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	
	int codigo_peca = sc.nextInt();
	int qnt_peca = sc.nextInt();
	double valor_peca = sc.nextDouble();
	
	int codigo_peca2 = sc.nextInt();
	int qnt_peca2 = sc.nextInt();
	double valor_peca2 =sc.nextDouble();
	
	double total = valor_peca*qnt_peca+valor_peca2+qnt_peca2;
	System.out.printf("Valo a pagar = R$ %.2f",total);
	
	sc.close();
	

	}

}
