**自定义脚本**
package.js文件中的scripts
- "runjs":"node ./03-scripts/scripts1.js & node ./03-scripts/scripts2.js"
- npm run runjs 运行
- & 并行
- && 串行
- 其中test和start脚本可以简写运行，npm start，npm test

**脚本自定义变量**
- 脚本自定义的变量只有通过脚本运行才可以访问，例如 npm start，node ./03-scripts/scripts.js无法访问
- npm run build，该脚本只有mac os运行