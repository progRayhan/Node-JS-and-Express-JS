// import module
const name = require('./1-names-module')
const sayHi = require('./2-utils-module')

sayHi(name.rayhan)
sayHi(name.nasir)
sayHi("Reza")

// second way - destructuring
const {rayhan,nasir} = require("./1-names-module")
sayHi(rayhan)
sayHi(nasir)