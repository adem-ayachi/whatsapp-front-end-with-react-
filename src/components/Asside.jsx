import React from 'react'
import userImg from '../../ressources/img/pdp.jpg'
import '../../ressources/main.css'
import PersonneList from './PersonneList'
export default function Asside() {
  return (
    <div className='left'>
        <div className='top_section'>
            <div className='conv_left'>
                <img src={userImg} className='conv_icon' />
            </div>
            <div className='conv_right'>
                <i className='fa fa-search' aria-hidden='true'></i>
                <i className='fa-solid fa-message'></i>
                <i className='fa-solid fa-ellipsis-vertical'></i>
            </div>
        </div>
        <div className='search-section'>
            <i className='fa fa-search search-icon' aria-hidden="true"></i>
            <input type="search" className='search-bar' placeholder='Search or Start New chat' />
        </div>
        <PersonneList/>
    </div>
  )
}
