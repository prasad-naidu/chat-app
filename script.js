const socket = io('http://localhost:3000')
const messageContainer=document.getElementById('message-container')
const messageForm=document.getElementById('send-container')
const messageInput=document.getElementById('message-input')

const name = prompt('what is your name?')


appendMessage('you joined')
socket.emit('new-user',name)


socket.on('chat-message',data=>{
    appendMessage(`${data.name}:${data.msg}`)
})

socket.on('user-conected',name=>{
    appendMessage(`${name} conected`)
})


messageForm.addEventListener('submit',e=>{
    e.preventDefault()
    const messsage=messageInput.value
    appendMessage(`you:${messsage}`)
    socket.emit('send-chat-message',messsage)
    messsageInput.value=""
})

function appendMessage(message){
    const messageElement=document.createElement('div')
    messageElement.innerText=message
    messageContainer.append(messageElement)
}