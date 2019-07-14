const message = require('../model/message');
const xss = require("xss");
const options = {
    whiteList: {
        a: [" href ", " title ", " target "]
    }
};
const limp = message => {
    const data = new Date();
    return {
        author: xss(message.author, options),
        message: xss(message.message, options),
        time: data.toLocaleTimeString(),
        hora: data.toLocaleTimeString().substr(0, 5)
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