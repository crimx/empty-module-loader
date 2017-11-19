function empty () {
	this.cacheable()
	return 'module.exports = function () {} // removed by empty-module-loader'
}

module.exports = empty
module.exports.pitch = empty
