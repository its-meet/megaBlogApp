import React from 'react'
import logo from '../../public/logo.png'
const Logo = ({width='100px', ...props}) => {
  return (
    <div {...props}>
      <img src={logo} alt="logo" className='h-[50px]' />
    </div>
  )
}

export default Logo
