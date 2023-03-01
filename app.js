// npm -global command, comes with node
// npm --version (-v)

// local depenedency - use only in this particular project
// npm i <packageName>

// global dependency - use it in a project
// npm install -g <packageName>
// sudo npm intsall -g <pakcageName> (mac)

// package.json - manifest file (stores mportant information aboutproject/package)'
// manuell approach (create package.json in the root, create propertiestc)
// npm init (step by step press enter to skip)
//! npm init -y (everything default) {*fastest approach*}

//* before being able to install any npm packages, one needs a package.json file duh!
// npm i lodash ---> with installing the first npm package/dependency, Node creates the node_module folder

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
