import math
e = [1.718, 2.718, 3.718, 4.718, 5.718, 6.718, 7.718, 8.718, 9.718, 10.718,]
z = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
g = []

for i in range(len(e)):
    formula = 1 / (1 + math.pow(e[i], -z[i]))
    g.append(formula)

print(g)

