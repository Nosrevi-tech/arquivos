import java.util.Scanner;

public class Atv4 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite o numero do funcionário:");
		int numero_fun = sc.nextInt();
		System.out.println("Digite a quantidade de horas trabalhadas pelo funcionario:");
		int horas_trab = sc.nextInt();
		System.out.println("Digite o quanto esse funcionario recebe por hora");
		double qnt_hora = sc.nextDouble();
		
		System.out.println("Numero: " + numero_fun);
		double salario_total = horas_trab*qnt_hora;
		System.out.printf("Salario : R$ %.2f", salario_total);
		
		sc.close();
	}

}
