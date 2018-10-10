function empty () {
  this.cacheable()
  return 'export default function () { } // removed by empty-module-loader'
}

module.exports = empty
module.exports.pitch = empty
