print("Bem vindo a calculadora de eletrostática")

print("Digite nas linhas abaixos o valor de Q (carga 1), q (carga 2) e a distância (em metros) respectivamente, depois de cada valor digitado, pressione Enter.")

#For ever

K = 9*10**9

#Inputs

Q = float(input("Defina Q: "))
q = float(input("Defina q: "))
d = float(input("Defina d: "))

#Contas

V = (K * Q)/d   
E = (K*abs(Q))/d**2
Epe = (K*Q*q)/d
F = (K*abs(Q)*abs(q))/d**2

#Arrumando os módulos

#DOIS
E_ = abs(E)
#QUATRO
F_ = abs(F)

#Exibindo os resultados

#UM
print(f"V = {V} V")
print(format(V,'.1E')+" V")
#DOIS
print(f"E = {E_} N/C")
print(format(E_,'.1E')+" N/C")
#TRÊS
print("Epe = ", Epe, " J")
print(format(Epe,'.1E')+" J")
#QUATRO
print(f"F = {F_}"+" N")
print(format(F,'.1E')+" N")

#Só para não fechar no cmd
print("Precione <Enter> para fechar o programa")
input()
