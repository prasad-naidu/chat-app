const io=require('socket.io')(3000)

const users={}

io.on('connection',socket=>{

socket.on('new-user',name=>{
users[socket.id]=name
socket.broadcast.emit('user-conected',name)

})

    socket.on('send-chat-message',msg=>{
        socket.broadcast.emit('chat-message',{msg:msg,name:users[socket.id]})
    })
}) 