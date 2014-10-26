var TraceurAPI = require('traceur/src/node/api')
var FS = require('fs')

var src = 'symbol-enum.js'
var dest = 'symbol-enum.es5.js'

var contents = FS.readFileSync(src).toString()

var compiler = new TraceurAPI.NodeCompiler({
  sourceMaps: true,
  modules: 'commonjs',
  experimental: true
})

var compiled = compiler.compile(contents, src, dest)

var sourceMap = compiler.getSourceMap()

FS.writeFile(dest, compiled, function(err) {
  if (err) throw err
})
FS.writeFile(dest + '.map', function(err) {
  if (err) throw err
})
