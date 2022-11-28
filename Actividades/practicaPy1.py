x=0
n=0
limite= 500
while n < limite:
    x = x+1
    n = n+1
    if (x == 6):
        print("--------------------")
        x = 0
        n = n-1
    elif(n %4 ==0):
        print(n,"multiplo de 4")
    elif (n%9 ==0):
        print(n,"multiplo de 9")
    else:
        print(n)
