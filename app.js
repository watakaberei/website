const fs = require('fs');

const f1 = fs.readFileSync('./index.html');
console.log(f1.toString());