1. yarn init -y
2. yarn add webpack@4.44.2 -D，此处不建议使用webpack5，直接将src/app.js的const x = 100 console(x)编译输出dist/app.js console(100)，不便于学习
3. yarn add webpack-cli@3.3.12 -D,跟随webpack降版本
4. 此时node版本需降到16及以下
5. npx webpack