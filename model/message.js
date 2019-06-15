const banco = require('../datasouce/bank');
var xss = require("xss");

class Message {

    constructor() {

        this.banco = new banco();
    }

    async push(message) {
        const query = "insert into message (author, message) values ( :author, :message )";
        return await this.banco.create(query, message);
    }

    async all(message) {
        const query = 'select * from message';
        return await this.banco.read(query);
    }
}


module.exports = new Message();