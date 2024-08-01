import React from 'react'
import './nav.css'
import NavNotices from './NavNotices';
import NavMessage from './NavMessage';
import NavAvatar from './NavAvatar';

const nav = () => {
  return (
    <nav className='header-nav ms-auto'>
      <ul className='d-flex align-items-center'>
        <NavNotices />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  )
}

export default nav