module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',

    // babel-plugin-component使用
    //["es2015", { "modules": false }]
    //上面element-ui官方写法会报错某组件未安装
    ["@babel/preset-env", { "modules": false }]
  ],
  // babel-plugin-component使用
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
