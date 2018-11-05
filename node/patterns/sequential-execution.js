const fs = require('fs')

function spider(url, callback) {
    const filename = ''
    fs.exists(filename, exists => {
        if (exists) {
            return callback(null, filename, false)
        }
        download(url, filename, err => {
            if (err) {
                return callback(err);
            }
            callback(null, filename, true)
        })
    })
}
