const message = require('../model/message');

module.exports = async (socket) => {
    const messages = await message.all();
    socket.emit('previossMessage', messages);
    socket.on('sendMenssage', async data => {
        await message.push(data);
        socket.broadcast.emit('retornMensage', data);
    })
};