1. yarn init -y
2. yarn add webpack@4.44.2 -D，此处不建议使用webpack5，直接将src/app.js的const x = 100 console(x)编译输出dist/app.js console(100)，不便于学习
3. yarn add webpack-cli@3.3.12 -D,跟随webpack降版本。此时node版本需降到16及以下
4. yarn add html-webpack-plugin@4.5.0 -D
5. yarn add webpack-dev-server@3.11.0 -D，最新版需要再安装@webpack-cli/serve，暂无法解决
6. yarn add copy-webpack-plugin@6.3.2 -D
7. yarn add art-template@4.13.2 art-template-loader@1.4.3 -D

npx webpack 运行打包(已配置脚本 build，yarn build运行)
npx webpack-dev-server 启动服务器(已配置脚本 dev，yarn dev运行)