from clases import Producto
import copy, datetime

class mierda(Producto):

    def __init__(self, name, phrase,assclown,buttmad):
        self.name = name
        self.phrase = phrase
        self.assclown = assclown
        self.buttmad = buttmad
    def __str__(self):
        return print("esto soy yo {} {} {} {}".format(self.assclown,self.buttmad,self.name,self.phrase))

yo = mierda("tu vieja","dios le da las batallas más graciosas a sus payasitos más divertidos",34,69)

yo.__str__()

yo2 = copy.copy(yo)
yo.assclown = 32
yo2.assclown = 59
yo2.__str__()

yo4 = datetime.date.today().year

print("hoy es",yo4)