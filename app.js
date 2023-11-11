const https = require('https');
const rl = require('./getline.js');

async function main() {
    let msg = await rl.getline('type your message: ');
    msg = '{"message":"' + msg + '"}';
    
    const option = {
        hostname: 'tuya-no.firebaseio.com',
        path: '/dummy.json',
        method: 'PUT',
        headrs: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(msg)
        }
    };
    
    let req = https.request(option, (res) => {
        console.log('STATUS:' + res.statusCode);
    })
    
    req.on('error', (e) => {
        console.log(e);
    });
    
    req.write(msg, (err) => {
        if (err != undefined) {
            console.log(err);
        }
    });
    
    req.end(() => {
        console.log('finished!!');
    });
}

main();