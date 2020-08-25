import React, { useEffect, useState } from 'react'
import querryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000'
  useEffect(() => {
    const { name, room } = querryString.parse(location.search)
    socket = io(ENDPOINT)
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {

    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      console.log('msg', message)
      setMessages([...messages, message])
    })
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log('Enter')
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  //console.log(message, messages)
  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage} />
      </div>Î
    </div>
  )
}

export default Chat
