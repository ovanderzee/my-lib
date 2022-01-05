[![Build Status](https://travis-ci.org/ovanderzee/my-lib.svg?branch=main)](https://travis-ci.org/ovanderzee/my-lib)
[![Coverage Status](https://coveralls.io/repos/github/ovanderzee/my-lib/badge.svg?branch=main)](https://coveralls.io/github/ovanderzee/my-lib?branch=main)

# my-lib

Library of recurring, unconnected functions

## Install and usage

Install the package as npm package. Provided are
a umd-formatted file in the dist folder to require or to just load

```html
<script src="../../node_modules/dist/myLib.js"></script>
<script src="https://unpkg.com/my-lib@latest"></script>
```

and an es-module in the module folder to import the separate functions
or to import all

```js
import { isAlphaNumeric } from 'my-lib'
import * as myLib from 'my-lib'
```

[//]: # (Contents)

#include "md/API.md"

## Demo

[see demo folder](./demo)
