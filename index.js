const semverCompare = require('./dist/index').semverCompare;

module.exports = semverCompare;

// Allow use of default import syntax in TypeScript
module.exports.default = semverCompare;