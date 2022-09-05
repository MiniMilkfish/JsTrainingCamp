 记录时间: 2022/8/27

 webpack 是一个代码编译工具,有入口、出口、loader 和插件。
 
 是一个用于现代Javascript 应用程序的静态模块打包工具 (module bundler)。
 
 当webpack 处理应用程序时, 它会在内部构建一个依赖图 (dependency graph) ,此依赖对应映射到项目所需的每个模块,并生成一个或多个bundle

## 概览

- 软件名称   webpack
- 软件平台   Nodejs
- 上线时间   2013/12/20
- 最近更新时间   2021/7/29
- 软件语言   Javascript
- 开发商     OpenJS Foundation
- 软件授权   MIT License
- 软件大小   1.68M
- 当前版本   v5.74.0

# 主要功能

 其天生就是代码分割、模块化,webpack2.0 中加入 tree shaking, 用来提取公共代码,去掉死亡代码

 运行环境
 webpack5 运行于 Node.js V10.13.0+ 的版本

# 概念
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。

# 核心概念
## 入口 「entry points」
入口起点（entry point）指示webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的

每个依赖项随即被处理，最后输出到称之为 bundles 的文件中

可以通过在 webpack 配置中配置 entry 属性， 来指定一个入口起点（或多个入口起点）。默认值为 “./src”

webpack.config.js

```javascript
module.exports = {
    entry: './path/to/my/entry/file.js'
}
```
### 单个入口（简写）语法

用法： ```entry：string|Array<stirng>``` 

webpack.config.js

  ```javascript
const config = {
    entry: {
        main: "./path/to/my/entry/file.js"
    }
}
```

```
在你想要多个依赖文件一起注入，并且将他们的依赖导向（graph）到一个 chunk 时，传入数组的方式就很有用。
当你正在寻找为「只有一个入口起点的应用程序或工具（即library）快速设置 webpack 配置的时候，这会是个很不错的选择。然而，使用此语法在扩展配置时有失灵活性。
```

### 对象语法

用法： ```entry：{[entryChunkName: string]: sting| Array<string>}```

webpack.config.js

```javascript
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
}
```

对象语法会比较繁琐。然而，这是应用程序中定义入口的最可扩展的方式。

“可扩展的webpack 配置” 是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点（concern）从环境（environment）、构建目标（build target）、运行时（runtime）中分离。

然而使用专门的工具（如 webpack-merge）将他们合并。

### 常见场景

#### 分离应用程序（app）和第三方库（vendor）入口

webpack.config.js
```javascript
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
}
``` 

#### 多页面用用程序

## 输出 -  出口 output
output 属性告诉webpack 在哪里输出它所创建的bundles， 以及如何命名这些文件， 默认值为 ./dist。

基本上，整个应用程序结构，都会编译到你定制的输出路径的文件夹中，你可以通过在配置中指定一个 output 字段， 来配置这些处理过程：

webpack.conifg.js

```javascript
const path = require('path');
module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};
```

## loader
loader 让 webpack 能够去处理那些非 Javascript 文件（webpack 自身只理解 Javascript）。

loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后就可以利用 webpack 的打包能力，对它们进行处理。

本质上， webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的bundle） 可以直接引用的模块

```
注意： loader 能够 import 导入任何类型的模块（例如 .css 文件），这是webpack 特有的功能， 其他打包程序或任何执行器的可能并不支持。我们认为这种语言扩展时很有必要的，因为这可以是开发人员创建出更准确的依赖关系图
```
在更高层面，在 webpack 的配置中 loader 有两个目标：
- test 属性， 用于表示出应该被对应的 loader 进行转换的某个或某些文件
- use 属性，表示进行转换时， 应该使用哪个loader

webpack.config.js
```javascript
const path = require("path");

const config = {
    output: {
        filename: "my-first-webpack.bundle.js"
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader'}
        ]
    }
}
module.exports = config;
```
以上配置中，对一个单纯的 module 对象定义了rules 属性， 里面包含两个必须属性： test 和 use。

这告诉 webpack 编译器（compiler）如下信息：

- "嘿，webpack 编译器， 当你碰到「在require（）/import 语句中被解析为‘.txt’ 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下"

## 插件（plugins）
loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务

插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。

插件接口功能极其强大，可以用来处理各种各样的任务

想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中，多数插件可以通过选项（option） 自定义。

你可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例

webpack.config.js

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    module: {
        rules: [
            {test: \/.txt$/, use: 'raw-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
module.exports = config;
```

## 模式
通过选择 development 或 production 之中的一个， 来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化

``` javascript
module.exports = {
    mode: "production"
}
```