import React from 'react'


export default function Message({isSent,message}) {
  return (
    <div>
        <div className={isSent?"sent":"received"}>
           <div className='message'>
            {message}
           </div>
        </div>
    </div>
  )
}
