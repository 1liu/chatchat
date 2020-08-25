import React from 'react'
import ScrollToButtom from 'react-scroll-to-bottom'
import './Messages.css'

import Message from '../Message/Message'

const Messages = ({ messages, name }) => {
  return (
    <ScrollToButtom className="messages">
      {
        messages.map((msg, index) => (
          <div key={index}>
            <Message message={msg} name={name} />
          </div>
        ))
      }
    </ScrollToButtom>
  )
}

export default Messages
