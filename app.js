const fs = require('fs');
const rl = require('./getline.js');

async function main() {
    let msg = await rl.getline('please type:');
    fs.writeFileSync('./data.txt', msg);
    console.log('save data.txt to write:' + msg);
}

main();