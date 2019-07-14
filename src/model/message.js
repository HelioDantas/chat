const banco = require('../datasouce/bank');

class Message {

    constructor() {

        this.banco = new banco();
    }

    async push(message) {
        const query = "insert into message (author, message, time) values ( :author, :message, :time)";
        return await this.banco.create(query, message);
    }

    async all() {
        const query = 'select substr(time::VARCHAR, 0, 6) hora, * from message;';
        return await this.banco.read(query);
    }
}


module.exports = new Message();