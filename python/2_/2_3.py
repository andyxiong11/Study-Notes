name = 'ada lovelace'
# title()方法，将每个单词的首字母都改为大写
print(name.title())

name = 'Ada Lovelace'
# upper()方法，将字符串全部转为大写
print(name.upper())
# lower()方法，将字符串全部转为小写
print(name.lower())

first_name = "ada"
last_name = "lovelace"
# 拼接字符串
full_name = first_name + " " + last_name
message = "Hello, " + full_name.title() + "!"
print(message)

# 转义字符
print("Languages:\nPython\nC\nJava")

favorite_language = '   python   '
print(favorite_language)
# rstrip()方法，删除字符串末尾的空白
print(favorite_language.rstrip())
# lstrip()方法，删除字符串开头的空白
print(favorite_language.lstrip())
# strip()方法，删除字符串两端的空白
print(favorite_language.strip())

# 正确使用单双引号
# message = 'One of Python's strengths is its diverse community.'
message = "One of Python's strengths is its diverse community."
print(message)

# Pyton2 print无需括号
# print "Hello Python2.7"
