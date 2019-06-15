module.exports = (socket, messages) => {
    socket.emit('previossMessage', messages);
    socket.on('sendMenssage', data => {
        messages.push(data);
        socket.broadcast.emit('retornMensage', data);
    })
};