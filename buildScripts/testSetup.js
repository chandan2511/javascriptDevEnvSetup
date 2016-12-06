//This file is not transpiled so must use ES5 and CommomJs

//Register babel to transpile befotre our tests run
require('babel-register')();

//Disable Webpack's features that Mocha doesn't understand
require.extensions['.css']= function(){};
