// Client : Single room
// const socket = io('http://192.168.43.148:8000');

// const form = document.getElementById('message-form');
// const messageInput = document.getElementById('messageInput');
// const msgContainer = document.querySelector('.main-msg-container');
// const groupContainer = document.querySelector('.group') 

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const message  = messageInput.value;
//     appendMessage(`You : ${message}`, 'right');
//     socket.emit('send-message', message);
//     messageInput.value = '';
// });

// const appendMessage = (message, position) => {
//     const messageEle = document.createElement('div');
//     messageEle.innerText = message;
//     messageEle.classList.add('message');
//     messageEle.classList.add(position);
//     messageEle.classList.add('break');

//     msgContainer.append(messageEle);
// }

// const appendToGroup = (name) => {
//     const memberElement = document.createElement('div');
//     memberElement.classList.add('member');

//     const avtarElement = document.createElement('div');
//     avtarElement.classList.add('avtar')


//     const avtarImageElement = document.createElement('img');
//     avtarImageElement.src = `https://api.adorable.io/avatars/30/${name}.png`
//     avtarImageElement.alt = `${name}`
//     avtarElement.appendChild(avtarImageElement)

//     const nameElement = document.createElement('div');
//     nameElement.classList.add('name')
//     nameElement.innerText = name

//     memberElement.appendChild(avtarElement)
//     memberElement.appendChild(nameElement)

//     const container = document.getElementById('membersId')
//     container.append(memberElement)

//     // groupContainer.append(memberElement);
// }

// const notify = (message) => {
//     const messageEle = document.createElement('div');
//     messageEle.innerText = message;
//     messageEle.classList.add('notification');
//     msgContainer.append(messageEle);
// }

// document.getElementById('roomForm').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const name = document.getElementById('emailTextBox').value;
//     joinRoom(name)
// })

// const joinRoom = (name) => {
//     appendMessage('WebChat : Welcome ' + name, 'left')
//     socket.emit('new-user', name)    
// }

// socket.on('user-joined', name => {
//     message = name.toUpperCase() + ' joined the chat'
//     notify(message);
//     appendToGroup(name);
// });

// socket.on('receive-message', data => {
//     appendMessage(`${data.name} : ${data.message}`, 'left')
// })

// socket.on('group-members', members => {
//     for (var i in members) {
//         appendToGroup(members[i]);
//     }
// })

// Client : Multi Room

const socket = io('http://192.168.43.148:8000');

const form = document.getElementById('message-form');
const messageInput = document.getElementById('messageInput');
const msgContainer = document.querySelector('.main-msg-container');
const groupContainer = document.querySelector('.group') 

const appendToGroup = (name) => {
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');

    const avtarElement = document.createElement('div');
    avtarElement.classList.add('avtar')


    const avtarImageElement = document.createElement('img');
    avtarImageElement.src = `https://api.adorable.io/avatars/30/${name}.png`
    avtarImageElement.alt = `${name}`
    avtarElement.appendChild(avtarImageElement)

    const nameElement = document.createElement('div');
    nameElement.classList.add('name')
    nameElement.innerText = name

    memberElement.appendChild(avtarElement)
    memberElement.appendChild(nameElement)

    const container = document.getElementById('membersId')
    container.append(memberElement)

    // groupContainer.append(memberElement);
}

socket.on('group-members', members => {
    for (var i in members) {
        appendToGroup(members[i]);
    }
})

socket.on('user-joined', name => {
    message = name + ' joined the chat'
    notify(message);
    appendToGroup(name);
});

const notify = (message) => {
    const messageEle = document.createElement('div');
    messageEle.innerText = message;
    messageEle.classList.add('notification');
    msgContainer.append(messageEle);
}

const appendMessage = (message, position) => {
    const messageEle = document.createElement('div');
    messageEle.innerText = message;
    messageEle.classList.add('message');
    messageEle.classList.add(position);
    messageEle.classList.add('break');

    msgContainer.append(messageEle);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message  = messageInput.value;
    appendMessage(`You : ${message}`, 'right');
    socket.emit('send-message', message);
    messageInput.value = '';
});

socket.on('receive-message', data => {
    appendMessage(`${data.name} : ${data.message}`, 'left')
})

const joinRoom = (user_name, room_id) => {
    appendMessage('WebChat : Welcome ' + user_name + ' ' + room_id, 'left')
    console.log(user_name + ' ' + room_id);
    socket.emit('new-user', {'user': user_name, 'room': room_id} )    
}

document.getElementById('roomForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const user_name = document.getElementById('emailTextBox').value;
    const room_id = document.getElementById('roomIdTextBox').value;
    joinRoom(user_name, room_id)
})

document.getElementById('logout').addEventListener('click', (event) => {
    console.log("disconnecting")
    socket.emit('disconnect');
})

socket.on('disconnected', name => {
    console.log(name + "a")
    notify(name + ' left the romm');
})