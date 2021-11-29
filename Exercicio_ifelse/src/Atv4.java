import java.util.Scanner;

public class Atv4 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int hora_inicio = sc.nextInt();
		int hora_fim = sc.nextInt();
		
		int hora_total ;
		
		if (hora_inicio < hora_fim ) {
			hora_total = hora_inicio - hora_fim;
		}else {
			hora_total = 24 - hora_inicio + hora_fim;
		}
		
		System.out.printf("O jogo durou " +hora_total+ " (s).");
		sc.close();
	}

}
