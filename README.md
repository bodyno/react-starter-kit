# React Starter Kit

React开发中最好用的手脚架

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
