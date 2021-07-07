# sort方法，对列表进行永久性排序
cars = ['bmw','audi','toyota','subaru']
cars.sort()
print(cars)
# sort方法参数reverse=True,对列表反向排序，同样是永久性的
cars.sort(reverse=True)
print(cars)

# sorted函数，对列表进行临时排序

cars = ['bmw','audi','toyota','subaru']
print("Here is the original list:" )
print(cars)
print(sorted(cars))
print(cars)
# sorted函数参数reverse=True,对列表反向排序
print(sorted(cars,reverse=True))
print(cars)

# reverse()反转打印列表
cars = ['bmw','audi','toyota','subaru']
print(cars)
cars.reverse()
print(cars)

# len函数获取列表的长度
cars = ['bmw','audi','toyota','subaru']
len(cars)