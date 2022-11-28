#POO PROGRAMACIÓN ORIENTADA A OBJETOS
class Persona:
    piernas=2
    nombre= "tu vieja"
    def nombrar(self,nombre):
        self.nombre=nombre

    def presentarse(self):
        print("mi nombre es",self.nombre)
    
personaA = Persona()
personaA.nombrar("tu vieja")
personaA.presentarse()

class Alumno:
    nombre="Miguelito"
    nota=6
    def inicializar(self,nombre,nota):
        self.nombre=nombre
        self.nota=nota
    def imprimir(self):
        if self.nota<4:
            print(self.nombre , "esta desaprobado")
        else:
            print(self.nombre, "esta aprovado")

maikol= Alumno()

maikol.inicializar("Maikol",2)
maikol.imprimir()

c=("unt","ake","lean")
list_el_pollo=["a","b",c,"d",1,2,3,4.5]
print(list_el_pollo)
list_el_pollo[2].append("ursed")
print(list_el_pollo[2])