const path = require('path')

// sep - Returns the specific seperator
console.log(path.sep);

// basename() - Returns the last part of a path
const filename = path.basename('/Users/Refsnes/demo_path.js')
console.log(filename);

// join() - Joins the specified paths into one
const filepath = path.join('content','subfolder','text.txt')
console.log(filepath);

// resolve() - Resolves the specified paths into an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);