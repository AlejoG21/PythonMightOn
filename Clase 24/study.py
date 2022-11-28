def suma(a,b):
    """Esta función devuelve la suma de los parametros a y b
    
    Additional info for dumbasses who can't read"""

    resultado = a+b
    print(resultado)
    return resultado
def gente_Alta():
    cantidad = int(input("cantidad de personas:"))
    altura = float(input("Ingresar la altura de la persona mas alta en metros: "))
    print("{} y {}".format(cantidad,altura))

def twoDigits(number):
    """Verificá si el numero ingresado es de 2 digitos"""
    if number <10:
        print("ta chikito")
        
    elif number >=100:
        print("ta grande")
        
    else:
        print("ta bien")
def bigguhNumbah(num1,num2,num3):
    """escribe en la pantalla el mayor de los tres numeros"""
    if num1 == num2:
        if num2 == num3:
            print("todos los numeros son iguales")
            return
        elif num2 > num3:
            print(num2, "es el más grande")
        else:
            print(num3,"es el más grande")
    elif num1 == num3:
        if num1 > num2:
            print(num1, "is the biggest")
        if num1 < num2:
            print(num2, "is the ultimate")


    

def mostrar_perimetro(valor):
    result = valor *4
    print (result)
    return result
def mostrar_superficie(valor):
    result = valor * valor
    print(result)
    return result
def carga_datos(v1,v2):
    fix= v1 * v2

def calcu():
    la=int(input("Ingrese el valor del lado de un cuadrado:"))
    respuesta=input("Quiere calcular el PERIMETRO o la SUPERFICIE)")
    if respuesta == "perimetro":
        answer = mostrar_perimetro(la)
    if respuesta == "superficie":
        answer = mostrar_superficie(la)
    print(answer)
    return answer
#no llego a codear lo suficientemente rapido.
#tengo que simplemente volver y revisar lo que enseña

listo_el_pollo =["a","b","c","d",1,2,3,4,5]