// readFileSync & writeFileSync are Destructuring from fs module
// readFileSync method needs 2 parameters : path & what is the encoding
// writeFileSync method needs 2 arguments : filename & value(what we would wanna pass)

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8');
const second = readFileSync('./content/subfolder/second.txt','utf8');

writeFileSync('./content/request.txt',`Text is : ${first} ${second}`,{flag:'a'});

console.log(first,second);