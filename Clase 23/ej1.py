"""#problema 1
#programa que calcula si un numero es mayor
sueldo = int(input("Ingresa el sueldo"))
if sueldo>3000:
    print("u rich bitch")
#problema 2
#programa que solicita dos numeros y establece el numero mayor
num1 =int(input("Ingrese numero"))
num2 =int(input("Ingrese numero"))

if num1>num2:
    print(num1)
else:
    print(num2)
#problema 3
#programa que pida por teclado 3 notas y calcule el promedio

nota1 = int(input("nota"))
nota2 = int(input("nota 2"))
nota3 = int(input("nota 3"))
prom = (nota1+nota2+nota3)/3
if prom >=7:
    print("promocionado")
elif prom >=4 and prom <=6:
    print("apromado")
else: 
    print("reprobado")
#indendatiooon

#problema 4
#contar hasta 100.
contador=1
while contador<101:
    print(contador)
    contador+=1
print("Fin")

#problema 5
#codear un programa que cuente hasta el numero positivo ingresado
objetivo = int(input("ingresar objetivo"))
contador = 1
while contador<=objetivo:
    print(contador)
    contador +=1

#problema 6
#Programa que permite cargar 5 valores por teclado y nos muestre la suma y promedio de los valores.

suma = 0
contador = 0
while contador<5:
    valor= int(input("Ingrese el valor {} :".format(contador+1)))
    suma+=valor
    contador+=1
promedio=suma/contador
print("la suma es {} y el promedio es {}".format(suma,promedio))
"""
#problema 7
#permiti al usuario aclarar el numero de elementos a analizar. luego, corrobora que el valor este entre 1.2 y 1.3

contador = 0
objetos = int(input("cantidad de objetos a analizar"))
cumplidos = 0
while contador< objetos:
    longitud = float(input("longitud del objeto"))
    if longitud >= 1.20 and longitud <= 1.30:
        cumplidos+=1
    contador+=1
print("de los {} objetos ingresados, {} son validos".format(objetos,cumplidos))