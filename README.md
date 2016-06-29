# grunt-json-minify

Grunt JSON minification task that does not concatinate the output. For concatination use [grunt-minjson](https://github.com/shama/grunt-minjson).

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-json-minify`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-json-minify');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

Set the `files` parameter to the directory you want to minify. The minification is inplace, so you want to copy the data to the destination before you minify.

Example:

```
'json-minify': {
  build: {
    files: 'build/**/*.json'
  }
}
```

## License
Copyright (c) 2016 werk85
Licensed under the MIT license.
