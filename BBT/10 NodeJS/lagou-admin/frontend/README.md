1. yarn init -y
2. yarn add webpack@4.44.2 -D，此处不建议使用webpack5，直接将src/app.js的const x = 100 console(x)编译输出dist/app.js console(100)，不便于学习
3. yarn add webpack-cli@3.3.12 -D,跟随webpack降版本。此时node版本需降到16及以下
4. yarn add html-webpack-plugin@4.5.0 -D
5. yarn add webpack-dev-server@3.11.0 -D，最新版需要再安装@webpack-cli/serve，暂无法解决
6. yarn add copy-webpack-plugin@6.3.2 -D
7. yarn add art-template@4.13.2 art-template-loader@1.4.3 -D webpack解析art模板
8. yarn add clean-webpack-plugin@3 -D 每次构建，自动清除上一次的打包文件
9. yarn add sme-router -S 路由
10. yarn add css-loader@5 style-loader@2 -D webpack解析css文件 最新版有问题
11. yarn remove sme-router -S 删除sme-router,因为不支持异步,改用改造sme-router后的gp21-router
12. yarn add gp21-router -S 安装gp21-router
13. yarn add url-loader file-loader -S      webpack模板解析图片

npx webpack 运行打包(已配置脚本 build，yarn build运行)
npx webpack-dev-server 启动服务器(已配置脚本 dev，yarn dev运行)