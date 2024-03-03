console.log("Hello from feature/sajid/readFile");

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});

fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});