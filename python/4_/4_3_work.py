for value in range(1,21):
    print(value)

num = list(range(1,1000001))
for value in num:
    print(value)

num = list(range(1,1000001))
min(num)
max(num)
sum(num)

uneven_num = list(range(1,21,2))
for value in uneven_num:
    print(value)

num = list(range(3,31,3))
for value in num:
    print(value)

for value in range(1,11):
    value = value**3
    print(value)

num = [value**3 for value in range(1,11)]
print(num)