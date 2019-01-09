const fs = require('fs')
const zlib = require('zlib')
const http = require('http')
const path = require('path')
const file = process.argv[2]
const server = process.argv[3]

const options = {
    hostname: server,
    port: 3000,
    path: '/',
    methods: 'PUT',
    headers: {
        filename: path.basename(file),
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip'
    }
}


const req = http.request(options, res => {
    const statusCode = res.statusCode
    if (statusCode == 201) {
        console.log('Successful')
    } else {
        console.log('Failed')
    }
})

fs.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(req)


