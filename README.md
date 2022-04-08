semver-compare
--

> A tiny semantic version compare library for JavaScript, Only **1 kb** (minified and gzipped). 

### Installation

```bash
❯ npm install semver-compare-lite --save

or

❯ yarn add semver-compare-lite
```

### Usage

```js
const compareSemver = require('semver-compare-lite')

compareSemver('1.0.0','1.0.0-alpha')
// gt => 1

compareSemver('1.0.0-alpha.1','1.0.0-alpha.beta')
// lt => -1

compareSemver('1.0.0','1.0.0')
// eq => 0

compareSemver('1.0.0+20220101','1.0.0+exp.sha.5114f85')
// eq => 0

```

### License
[MIT](https://opensource.org/licenses/MIT)   