// CommonJs
let fs = require('fs');
for (let i = 1; i <= 10; i++) {
    let str = i < 10 ? '0' + i: i;
    str = './modules/' + str + '.js';
    fs.appendFileSync(str, '');
}