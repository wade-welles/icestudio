// Task to build a standalone toolchain for each OS

var ToolchainBuilder = require('./toolchain_builder.js');

module.exports = function(grunt) {

  grunt.registerTask('toolchain', 'Packaging the current toolchain', function() {
    var done = this.async(),
        options = this.options()

    // create and run toolchainBuilder
    var tb = new ToolchainBuilder(options);

    tb.on('log',function (log) {
      grunt.log.writeln(log);
    });

    tb.build(function(err) {
      if(err) {
        grunt.fail.fatal(err);
      } else {
        grunt.log.ok('Standalone toolchain created!');
      }
      done();
    });

  });

};
