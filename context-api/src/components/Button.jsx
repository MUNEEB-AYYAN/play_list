import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    
    const [theme,setTheme ] =useContext(ThemeDataContext)

    const changeTheme = () => {
        // Logic to change theme will go here
        console.log('Theme has changed');
        setTheme(theme === 'Light' ? 'Dark' : 'Light');

    }

  return (
    <div>
        <button onClick={changeTheme}
        className='bg-emerald-300 px-2 py-1 rounded-md font-semibold m-2 active:scale-95 cursor-pointer'
        >Change Theme</button>
    </div>
  )
}

export default Button