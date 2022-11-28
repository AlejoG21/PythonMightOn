from abc import ABC, abstractmethod
class Producto:
    #aca estoy definiendo una clase
    def __init__(self,referencia,nombre,descripcion,precio):
        self.referencia = referencia
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
    def __str__(self):
        return "Producto: {} - {} - {} - {}".format(self.referencia,self.nombre,self.descripcion,self.precio)
    def rebajar_producto(self,rebaja):
        self.precio = self.precio - rebaja
    
class Adorno(Producto):
    #aca la clase Adorno esta heredando todo lo que hay en Producto
    pass
    def adornito():
        print("I like money")

#aca estoy creando una instancia de la clase Adorno, que es un producto pero con un metodo extra.
objeto = Adorno(2034,"Vasito","es chiquito",150)

print(objeto)

class Animal(ABC):
    #abstract class
    @abstractmethod
    def yo_mama():
        print("que tema no")
    def yo_papa():
        print("non mandatory")