# React Starter Kit

React开发中最好用的手脚架

这个启动包的设计是为了让你使用一整套最新最酷的前端技术，所有都是可配置，富特性，基于webpack已经提供代码热加载，css模块with sass，单元测试，代码覆盖率报告，代码分割等等更多

这个项目最主要的目的是尽可能果断的保留。目的不是要你一定按照这个结构去完成你的项目，谐在使前端开发更健壮，更简单还有最重要的是更快乐。你可以获得以下的所有特性！

最后，如果没有大家的贡献，这个项目是不可能如此健壮的，所以，谢谢大家。

觉得不错的话 麻烦点一下Star并follow一下本人 这是对作者最大的支持

所有相关库已准备好

随时等待调用

## 特性
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## 需求配置
* node `^4.2.0`
* npm `^3.0.0`

## 开始

确认好你的环境配置，然后就可以开始以下步骤

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
|`dev`|与 `npm start`相同, 但是启动nodemon守护进程。|
|`dev:no-debug`|与 `npm run dev` 但是禁用devtool（开发工具）。|
|`test`|开启Karam测试并生成覆盖率报告。|
|`test:dev`|开启Karma测试并监听改变随时重新测试，但是生成覆盖率报告。|
|`deploy`|启动代码检查，测试，如果成功，编译到dist目录下。|
|`deploy:dev`|与 `deploy`相同，但是`NODE_ENV` 值为 "development"。|
|`deploy:prod`|与 `deploy` 相同，但是`NODE_ENV` 值为 "production"。|
|`lint`|检查所有.js文件是否规范。|
|`lint:fix`|检查所有.js文件是否规范并修复它们。 [更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## 程序目录

```
.
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── routes               # Main route definitions and async split points
│       ├── index.js         # Bootstrap main application routes with store
│       ├── Root.js          # Wrapper component for context-aware providers
│       └── Home             # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── assets       # Assets required to render components
│           ├── components   # Presentational React Components
│           ├── container    # Connect components to actions and store
│           ├── modules      # Collections of reducers/constants/actions
│           └── routes **    # Fractal sub-routes (** optional)
└── tests                    # Unit tests
```

## Thank You

如果没有社区的话，这个项目是不可能诞生的， 感谢所有为这个项目做出贡献的人

This program is inspired by [davezuko](https://github.com/davezuko/react-redux-starter-kit)

Thank you all the time
