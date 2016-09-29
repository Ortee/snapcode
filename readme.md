# snapcode ([npm](https://www.npmjs.com/package/snapcode))

[![npm version](https://badge.fury.io/js/snapcode.svg)](https://badge.fury.io/js/snapcode)
![](https://img.shields.io/npm/dt/snapcode.svg)

> Get SVG Snapcode

![](./images/snapcode.jpg)

## Install

```
$ npm install snapcode
```
## Usage (in code)

```javascript
var snapcode = require('snapcode');
```

 
```javascript
snapcode.username(name: string, function(svg) {
        console.log(svg);
      });
```

Returns SVG.

## Examples

```javascript
var snapcode = require('snapcode');

snapcode.username("Test", function(svg) {
  console.log(svg);
});
```

## Unit tests

Use Jasmine to create that type of tests.

```
$ npm run test
```
