//Node Server : Single room

// const io = require('socket.io')(8000);
// const users = {};
// io.on('connection', socket => {
//     socket.on('new-user', name => {
//         if (name === null) {
//             return false
//         }
//         users[socket.id] = name;
//         members = []
//         for (var key in users) {
//             members.push(users[key])
//         }
        
//         io.to(socket.id).emit("group-members", members)
//         socket.broadcast.emit('user-joined', name);
//     });

//     socket.on('send-message', message => {
//         socket.broadcast.emit('receive-message', {message: message, name: users[socket.id]});
//     });
// });


//Node Server : Multi room
const io = require('socket.io')( process.env.PORT || 8000);
users = {}
io.on('connection', socket => {
    socket.on('new-user', data => {
        console.log(data['user'] + ' ' + data['room'])
        if (data['user'] === null) {
            return false
        }
        users[socket.id] = data['user']
        socket.join(data['room']);
        socket.to(data['room']).broadcast.emit('user-joined', data['user']);
        io.in(data['room']).clients((err , clients) => {
            members = []
            for (i = 0; i < clients.length; i ++) {
                members.push(users[clients[i]])
            }
            io.to(socket.id).emit("group-members", members)
        });
    });

    socket.on('send-message', message => {
        const current = Object.keys(socket.rooms).filter(item => item != socket.id);
        socket.to(current).broadcast.emit('receive-message', {'message': message, 'name': users[socket.id]});
    });

    socket.on('disconnect', () => {
        const current = Object.keys(socket.rooms).filter(item => item != socket.id);
        socket.to(current).broadcast.emit('disconnected', users[socket.id]);
    })
    
});