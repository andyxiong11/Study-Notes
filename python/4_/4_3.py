# 函数range,生成一系列数字，从左边的数开始，不包含右边的数
for value in range(1, 5):
    print(value)

# 使用range函数创建数字列表1-4
numbers = list(range(1, 5))
print(numbers)

# 打印1-10的偶数
even_numbers = list(range(2, 11, 2))
print(even_numbers)

#打印1-10的平方
squares = []
for value in range(1,11):
    square = value**2
    squares.append(square)
print(squares)

max(squares)
min(squares)
sum(squares)

#列表解析
squares = [value**2 for value in range(1,11)]
print(squares)