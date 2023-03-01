//! CommonJS, every file is module (by default)
//* Modules * Encapsulate Code (only share minimum)
//! Node uses commonJS library under the hood, so every file in Node is a Module
//* when you import a module, you envoce it [even when you don't call it]

const names = require("./4-names");
const sayHi = require("./5-utils");
const genericData = require("./6-alternative-flavour");
require("./7-mind-grenade");

console.log(genericData);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
