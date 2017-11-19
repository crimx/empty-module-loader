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

<h2 align="center">Examples</h2>

To remove [debug](https://github.com/visionmedia/debug) from production code, this loader works best with [babel-plugin-strip-function-call](https://github.com/azu/babel-plugin-strip-function-call), a comparatively robust plugin for removing function calls(using AST instead of hacky RegExp).

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules.debug/,
        loader: 'empty-module-loader'
      }
    ]
  }
}
```

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": [["strip-function-call", {
        "strip": ["debug"]
      }]]
    }
  }
}
```

<h3 align="center">Input</h3>

```js
const debug = require('debug')('http');

console.log('normal code');

debug('booting %o', 3);

console.log('normal code');
```

<h3 align="center">Output</h3>

```js
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var debug = __webpack_require__(1)('http');

console.log('normal code');

console.log('normal code');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function () {} // removed by empty-module-loader

/***/ })
```

[npm]: https://img.shields.io/npm/v/empty-module-loader.svg
[npm-url]: https://npmjs.com/package/empty-module-loader

[deps]: https://david-dm.org/crimx/empty-module-loader.svg
[deps-url]: https://david-dm.org/crimx/empty-module-loader

[dt-img]: https://img.shields.io/npm/dt/empty-module-loader.svg

