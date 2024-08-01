import React from 'react'

const NavAvatar = () => {
  return (
    <li className='nav-item dropdown pe-3'>
      <a 
      data-bs-toggle="dropdown"
      className='nav-link nav-profile d-flex align-items-center pe-0'
      href="">
        {/* <img src={profileImg} alt="" /> */}

      </a>
    </li>
  )
}

export default NavAvatar