const message = require('../model/message');
var xss = require("xss");

const limp = message => {
    return {
        author: xss(message.author),
        message: xss(message.message)
    };
};
module.exports = async (socket) => {
    const messages = await message.all();
    socket.emit('previossMessage', messages);
    socket.on('sendMenssage', async data => {
        data = await limp(data);
        await message.push(data);
        socket.emit('renderYouMessage', data);
        socket.broadcast.emit('retornMensage', data);
    })
};