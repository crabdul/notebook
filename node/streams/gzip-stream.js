const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

var start = process.hrtime();

fs.createReadStream(file)
    .pipe(zlib.createGzip())

    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => {
        const diff = process.hrtime(start);

        console.log('file successfully compressed');

        console.log(`Took ${(diff[0] + 1e9 + diff[1]) / 1e6} ms`);
    });
