<div align="center">
  <h1>Empty Module Loader</h1>
  <p>A webpack loader that replaces module with empty function.<p>
</div>

[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![Npm Downloads Total][dt-img]][npm]

<h2 align="center">Install</h2>

```bash
npm install --save-dev empty-module-loader
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /path-to-match-module/,
        loader: 'empty-module-loader'
      }
    ]
  }
}
```

That is it! All the related codes should be removed in production.

<h2 align="center">Example</h2>

This config is for demonstration only.

**webpack.config.js**

```js
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /debug/,
        loader: require.resolve('empty-module-loader')
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          mangle: false,
          ie8: false,
          output: {
            preserve_line: true,
            comments: true,
            indent_level: 2,
          },
        },
      }),
    ],
  },
}

```

**src/index.js**

```javascript
import debug from './debug'

console.log('normal code')

debug('booting %o', 3)

console.log('normal code')

```

**src/debug.js**

```javascript
export default function debug (...args) {
  console.log('debug:', ...args)
}

```

<h3 align="center">Run Commands At Project Root</h3>

```bash
npm init -y
npm install webpack webpack-cli uglifyjs-webpack-plugin --save-dev
npx webpack --config webpack.config.js
```

<h3 align="center">Output</h3>

```js
/************************************************************************/
/******/([
/* 0 */
/***/function(module,__webpack_exports__,__webpack_require__){

"use strict"
;__webpack_require__.r(__webpack_exports__);// removed by empty-module-loader
// CONCATENATED MODULE: ./src/index.js





console.log("normal code"),



console.log("normal code")
/***/}
/******/]);
```

[npm]: https://img.shields.io/npm/v/empty-module-loader.svg
[npm-url]: https://npmjs.com/package/empty-module-loader

[deps]: https://david-dm.org/crimx/empty-module-loader.svg
[deps-url]: https://david-dm.org/crimx/empty-module-loader

[dt-img]: https://img.shields.io/npm/dt/empty-module-loader.svg

