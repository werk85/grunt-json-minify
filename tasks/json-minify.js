/*
 * grunt-json-minify
 * https://github.com/mlegenhausen/grunt-json-minify
 *
 * Copyright (c) 2016 Malte Legenhausen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('json-minify', 'JSON minification task', function() {
    const files = grunt.file.expand(this.data.files);
    const options = this.options({
      reviver: undefined,
      replacer: undefined,
      space: '',
      transform: function (data, options) {
        return JSON.stringify(JSON.parse(data, options.reviver), options.replacer, options.space);
      }
    });

    let totalInBytes = 0;
    let totalOutBytes = 0;

    function calcCompression(inBytes, outBytes) {
      const profitPercents = 100 - outBytes * 100 / inBytes;
      return (Math.round((inBytes / 1024) * 1000) / 1000) + ' KiB - ' +
        ((Math.round(profitPercents * 10) / 10) + '%').green + ' = ' +
        (Math.round((outBytes / 1024) * 1000) / 1000) + ' KiB';
    }

    files.forEach(function(filepath) {
      const data = grunt.file.read(filepath);

      let compressed = '';

      try {
        compressed = options.transform(data, options);
      } catch (err) {
        grunt.fail.warn(err);
      }

      grunt.file.write(filepath, compressed);

      // and print profit info
      grunt.verbose.writeln('File "' + filepath + '":');
      grunt.verbose.ok(calcCompression(data.length, compressed.length));

      totalInBytes += data.length;
      totalOutBytes += compressed.length;
    });

    grunt.log.writeln('\nTotal compressed: ' + files.length + ' files');
    grunt.log.ok(calcCompression(totalInBytes, totalOutBytes));
  });
};
