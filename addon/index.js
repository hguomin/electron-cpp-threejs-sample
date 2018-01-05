//const addon = require('./build/Debug/addon');
const addon = require('bindings')('addon');

//export the addon to be used
module.exports = addon;

