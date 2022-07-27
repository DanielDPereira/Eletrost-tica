programa
{
	
	funcao inicio()
	{
		escreva("Bem vindo a calculadora de eletrostática\n")

		real Q, q, d
		real V, K, E, Epe, F

		K = 9000000000.0
		
		escreva("Defina Q\n")
		leia(Q)
		escreva("Defina q\n")
		leia(q)
		escreva("Defina d\n")
		leia(d)

		V = (K * Q)/d
		E = (K * Q)/d * d
		Epe = (K * Q * q)/d
		F = (K * Q * q)/d * d

		escreva("V = ", V,"\n")
		escreva("E = ", E,"\n")
		escreva("Epe = ", Epe,"\n")
		escreva("F = ", F,"\n")

		
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 62; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */