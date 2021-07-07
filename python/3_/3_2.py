motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
motorcycles[0] = 'ducati'
print(motorcycles)

# append方法，在列表末尾添加元素
motorcycles.append('ducati')
print(motorcycles)

motorcycles = [];
motorcycles.append('honda')
motorcycles.append('yamaha')
motorcycles.append('suzuki')
print(motorcycles)

# insert方法，在列表的某个位置插入元素
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati')

# del，删除列表某个位置的元素
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[0]

# pop方法，删除列表的元素并获取元素值。
# 列表就像一个栈，删除末尾的元素即弹出栈顶元素
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
last_motorcycles = motorcycles.pop()
print(last_motorcycles)
print("The last motorcycle I owned was a " + last_motorcycles.title() + ".")
# pop方法加入角标，删除列表的某个元素并获取元素值。
# pop方法和del的区别在于是否需要获取已删除的元素的值
print(motorcycles)
first_motorcycles = motorcycles.pop(0)
print(last_motorcycles)
print('The first motorcycle I owned was a ' + first_motorcycles.title() + '.')

# remove方法，根据元素值删除列表中的元素
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
too_expensive = 'yamaha'
motorcycles.remove(too_expensive)
print(motorcycles)
print("\nA " + too_expensive.title() + " is too expensive for me.")
