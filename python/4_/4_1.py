magicians = ['alice', 'david', 'carolina'] 
# 每个缩进的代码行都是循环的一部分，且将针对列表中的每个值都执行一次。因此，可对列表中的每个值执行任意次数的操作
for magician in magicians:
    print(magician)

# for cat in cats:
# for dog in dogs:
# for item in items:

for magician in magicians:
    print(magician.title() + ',that was a great trick!')
    print("I can't wait to see your next trick," + magician.title() + '\n')
# 在for循环后面，没有缩进的代码都只执行一次，而不会重复执行。
print('Thank you, everyone. That was a great magic show!')