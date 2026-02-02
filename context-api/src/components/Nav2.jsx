import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Theme from 'quill/core/theme'

const Nav2 = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div className='nav2 flex gap-10 text-lg font-semibold'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>{theme}</h4>
        
        
        
    </div>
  )
}

export default Nav2