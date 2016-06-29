const grunt = require('grunt');

exports['json-minify'] = {
  default_options: function (test) {
    test.expect(1);

    const actual = grunt.file.read('.tmp/default_options.json');
    const expected = grunt.file.read('test/expected/default_options.json');
    test.equal(actual, expected, 'should create a minified json file');

    test.done();
  },

  duplicate_keys: function (test) {
    test.expect(1);

    const actual = grunt.file.read('.tmp/duplicate_keys.json');
    const expected = grunt.file.read('test/expected/duplicate_keys.json');
    test.equal(actual, expected, 'should remove duplicate keys');

    test.done();
  }
};