const fs = require('fs');
const pathUtil = require('../util/path');
const path = require('path')
const sd = require('string_decoder')

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(pathUtil, 'data', 'products.json')
        fs.readFile(p, (error, fileContent) => {
            let products = [];
            if(!error) {
                let decoder = new sd.StringDecoder('utf8');
                products = JSON.parse(decoder.write(fileContent));
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), error => console.log(error));
        });
    }

    static fetchAll() {
        return [];
    }
}