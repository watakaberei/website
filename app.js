const fs = require('fs');

function getFile(fname){
  return new Promise((resolve, reject) => {
      fs.readFile(fname,(err, data) => {
          resolve(data);
      });
  });
}

async function main() {
    var data = await getFile('./index.html');
    console.log(data.toString());
}

main()

