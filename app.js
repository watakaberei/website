const gl = require("./getline.js")

const leadline = require('readline')

//メイン処理
async function main() {
    while(true) {
        var re = await gl.getline('input: ');
        console.log('(' + re.length + ' chars)');
    }
}

main(); //メインの処理