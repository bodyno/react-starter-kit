# React Starter Kit

React开发中最好用的脚手架。

<img src="https://cloud.githubusercontent.com/assets/5443058/26529189/0d9225d4-43ee-11e7-8187-8b54abe4fbb7.png" />

这个启动包的设计是为了让你使用一整套最新最酷的前端技术，所有都是可配置，富特性，基于webpack已经提供代码热加载，使用sass预处理css，单元测试，代码覆盖率报告，代码分割等等更多。

这个项目最主要的目的是尽可能果断的保留。目的不是要你一定按照这个结构去完成你的项目，谐在使前端开发更健壮，更简单还有最重要的是更快乐。你可以获得以下的所有特性！

最后，如果没有大家的贡献，这个项目是不可能如此健壮的。

所有相关库已准备好，随时等待调用。

## 特性
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## 需求配置
* node `^4.5.0`
* npm `^3.0.0`

## 开始

确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ git clone https://github.com/bodyno/react-starter-kit.git
$ cd react-starter-kit
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

如果一切顺利，你会看到如下:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：


|`npm run <script>`|解释|
|------------------|-----------|
|`start`|服务启动在3000端口，代码热替换开启。|
|`compile`|编译程序到dist目录下（默认目录~/dist）。|
|`dev`|与`npm start`相同, 但是启动nodemon守护进程。|
|`dev:no-debug`|与`npm run dev` 但是禁用devtool（开发工具）。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`test:dev`|开启Karma测试并监听改变随时重新测试，但是生成覆盖率报告。|
|`deploy`|启动代码检查，测试，如果成功，编译到dist目录下。|
|`deploy:dev`|与`deploy`相同，但是`NODE_ENV`值为"development"。|
|`deploy:prod`|与`deploy`相同，但是`NODE_ENV`值为"production"。|
|`lint`|检查所有.js文件是否规范。|
|`lint:fix`|检查所有.js文件是否规范并修复它们。 [更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## 程序目录

这个项目的结构使用的是 **fractal(不规则碎片形：适合大型项目)***，方法的分组主要是依照特性而不是文件类型。注意，这个目录结构只是一个指引，并不一定要按这个来。这种结构谐在让程序更容易扩展，想了解更多请[点击这里](https://github.com/justingreenberg)。


```
.
├── bin                      # 启动脚本
├── blueprints               # redux-cli的蓝图
├── build                    # 所有打包配置项
│   └── webpack              # webpack的指定环境配置文件
├── config                   # 项目配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── main.js              # 服务端程序入口文件
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── components           # 全局可复用的表现组件(Presentational Components)
│   ├── containers           # 全局可复用的容器组件
│   ├── layouts              # 主页结构
│   ├── static               # 静态文件(不要到处imported源文件)
│   ├── styles               # 程序样式
│   ├── store                # Redux指定块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer注册和注入
│   └── routes               # 主路由和异步分割点
│       ├── index.js         # 用store启动主程序路由
│       ├── Root.js          # 为上下文providers包住组件
│       └── Home             # 不规则路由
│           ├── index.js     # 路由定义和代码异步分割
│           ├── assets       # 组件引入的静态资源
│           ├── components   # 直观React组件
│           ├── container    # 连接actions和store
│           ├── modules      # reducers/constants/actions的集合
│           └── routes **    # 不规则子路由(** 可选择的)
└── tests                    # 单元测试
```

## 样式

所有的css和sass都支持会被预处理。只要被引入，都会经过[PostCSS](https://github.com/postcss/postcss)压缩，加前缀。在生产环境下会提取到一个css文件下。

## 服务端

这个项目的服务端使用Koa。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）。使用自定义的Koa程序替换[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，让它更容易实现universal 渲染和为了不使这个包过于庞大。

## 打包优化

Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。另外，在生产环境，我们使用[react-optimize](https://github.com/thejameskyle/babel-react-optimize)来优化React代码。

在生产环境下，webpack会导出一个css文件并压缩Javascript，并把js模块优化到最好的性能。

## 静态部署

如果你正在使用nginx处理程序，确保所有的路由都直接指向 `~/dist/index.html` 文件，然后让react-router处理剩下的事。如果你不是很确定应该怎么做，[文档在这里](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API，或者其它你想要做的事，这完全取决于你。

## 谢谢大家

如果没有大家的贡献，这个项目是不可能诞生的， 感谢所有为这个项目做出贡献的人。

This program is inspired by [davezuko](https://github.com/davezuko)

* [Justin Greenberg](https://github.com/justingreenberg) - For all of your PR's, getting us to Babel 6, and constant work improving our patterns.
* [Roman Pearah](https://github.com/neverfox) - For your bug reports, help in triaging issues, and PR contributions.
* [Spencer Dixin](https://github.com/SpencerCDixon) - For your creation of [redux-cli](https://github.com/SpencerCDixon/redux-cli).
* [Jonas Matser](https://github.com/mtsr) - For your help in triaging issues and unending support in our Gitter channel.

Thanks you guys all the time.
