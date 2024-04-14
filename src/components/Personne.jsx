import React from 'react'
import '../../ressources/main.css'
export default function Personne({abdalla}) {
  console.log(abdalla.name)
  return (
    <div className='conversation'>
      <img src={abdalla.pdp} className="friend_icon" />
      <div className='friend_message'>
            <div className='message_header'>
                <div className='message_title'>{abdalla.name}</div>
                <div className='message_date'>{abdalla.date}</div>
            </div>
            <div className='message_content'>{abdalla.content}</div>
      </div>
    </div>
  )
}
